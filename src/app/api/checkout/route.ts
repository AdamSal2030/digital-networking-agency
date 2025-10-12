import Stripe from "stripe";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

const PRODUCTS = {
  ONE: {
    label: "One Top-Tier Article Written & Featured For You",
    priceId: "price_1SEyi8BTMniLu4C6JBtOxV9X",
    priceText: "$147.00",
  },
  TWO: {
    label: "Two Top-Tier Articles Written & Featured For You",
    priceId: "price_1SEyiVBTMniLu4C6xYIje40w",
    priceText: "$247.00",
  },
} as const;

type ProductKey = keyof typeof PRODUCTS;

type Payload = {
  product: ProductKey; // "ONE" | "TWO"
  publications: string[];
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
};

function sanitizePhone(raw: string) {
  const cleaned = raw.trim().replace(/[^\d+]/g, "");
  return cleaned;
}

function isE164ish(phone: string) {
  return /^\+\d{7,15}$/.test(phone);
}

async function sendCustomerEmail(
  product: ProductKey,
  c: Payload["customer"],
  publications: string[]
) {
  const fromAddress =
    process.env.FROM_EMAIL && process.env.FROM_EMAIL.trim().length > 0
      ? process.env.FROM_EMAIL
      : "Checkout Bot <onboarding@resend.dev>";

  if (!process.env.ORDER_NOTIFY_TO) {
    console.warn("ORDER_NOTIFY_TO missing, skipping email.");
    return;
  }

  const p = PRODUCTS[product];
  const pubs = publications?.length ? publications.join(", ") : "N/A";

  const html = `
    <h2>New Stripe Checkout Lead</h2>
    <p><b>Product:</b> ${p.label} — ${p.priceText}</p>
    <p><b>Selected Publication${publications.length > 1 ? "s" : ""}:</b> ${pubs}</p>
    <hr/>
    <p><b>Name:</b> ${c.firstName} ${c.lastName}</p>
    <p><b>Email:</b> ${c.email}</p>
    <p><b>Phone:</b> ${c.phone}</p>
    <hr/>
    <p>Customer is being redirected to Stripe Checkout for payment.</p>
  `;

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: process.env.ORDER_NOTIFY_TO!,
    subject: `New Checkout Lead — ${p.priceText}`,
    html,
  });

  if (error) {
    console.error("Resend email error:", error);
    throw new Error(typeof error === "string" ? error : (error as any).message ?? "Unknown Resend error");
  }

  console.log("✅ Email sent via Resend. id =", data?.id);
}

export async function POST(req: Request) {
  try {
    const { product, customer, publications } = (await req.json()) as Payload;

    if (!product || !(product in PRODUCTS)) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }
    if (!customer?.firstName || !customer?.lastName || !customer?.email || !customer?.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const phone = sanitizePhone(customer.phone);
    if (!isE164ish(phone)) {
      return NextResponse.json(
        { error: "Phone must include a country code (e.g., +15551234567)" },
        { status: 400 }
      );
    }

    const cleanedPubs = Array.isArray(publications)
      ? publications.map((p) => String(p).trim()).filter(Boolean)
      : [];
    const uniquePubs = Array.from(new Set(cleanedPubs));

    if (uniquePubs.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one publication" },
        { status: 400 }
      );
    }
    if (product === "ONE" && uniquePubs.length !== 1) {
      return NextResponse.json(
        { error: "Please select exactly one publication for this package" },
        { status: 400 }
      );
    }
    if (product === "TWO" && uniquePubs.length !== 2) {
      return NextResponse.json(
        { error: "Please select exactly two publications for this package (no duplicates)" },
        { status: 400 }
      );
    }

    const p = PRODUCTS[product];

    await sendCustomerEmail(product, { ...customer, phone }, uniquePubs);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: p.priceId, quantity: 1 }],
      customer_email: customer.email,
      // Optional: also collect phone in Stripe UI (stored with the Checkout session/customer)
      phone_number_collection: { enabled: true },
      metadata: {
        product: p.label,
        publications: uniquePubs.join(", "),
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Checkout route error:", err);
    return NextResponse.json({ error: err?.message ?? "Checkout failed" }, { status: 500 });
  }
}
