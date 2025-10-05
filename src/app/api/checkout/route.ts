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
  publications: string[]; // 1 or 2 publication names
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    website?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
};

async function sendCustomerEmail(product: ProductKey, c: Payload["customer"], publications: string[]) {
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
    ${c.phone ? `<p><b>Phone:</b> ${c.phone}</p>` : ""}
    ${c.company ? `<p><b>Company:</b> ${c.company}</p>` : ""}
    ${c.website ? `<p><b>Website:</b> ${c.website}</p>` : ""}
    ${c.city || c.state || c.zipCode ? `<p><b>Location:</b> ${[c.city, c.state, c.zipCode].filter(Boolean).join(", ")}</p>` : ""}
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
    throw new Error(typeof error === "string" ? error : error.message ?? "Unknown Resend error");
  }

  console.log("✅ Email sent via Resend. id =", data?.id);
}

export async function POST(req: Request) {
  try {
    const { product, customer, publications } = (await req.json()) as Payload;

    if (!product || !(product in PRODUCTS)) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }
    if (!customer?.firstName || !customer?.lastName || !customer?.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!Array.isArray(publications) || publications.length === 0) {
      return NextResponse.json({ error: "Please select at least one publication" }, { status: 400 });
    }

    const p = PRODUCTS[product];

    // Send notification email
    await sendCustomerEmail(product, customer, publications);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: p.priceId, quantity: 1 }],
      customer_email: customer.email,
      metadata: {
        product: p.label,
        publications: publications.join(", "),
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone || "",
        company: customer.company || "",
        website: customer.website || "",
        city: customer.city || "",
        state: customer.state || "",
        zipCode: customer.zipCode || "",
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
