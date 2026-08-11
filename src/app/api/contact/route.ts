import { NextResponse } from "next/server";

export const runtime = "edge";

// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY   your Resend API key (re_...)
//   RESEND_TO        where inquiries land (default: sam@digitalnetworkingagency.com)
//   RESEND_FROM      verified sender, e.g. "DNA Website <support@digitalnetworkingagency.com>"
//                    (until your domain is verified in Resend, use "onboarding@resend.dev")
const TO = process.env.RESEND_TO || "sam@digitalnetworkingagency.com";
const FROM = process.env.RESEND_FROM || "DNA Website <onboarding@resend.dev>";

function esc(s: string) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #eee7e0;font:600 11px/1 'Helvetica Neue',Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#8a938c;width:170px;vertical-align:top;">${esc(label)}</td>
      <td style="padding:14px 0;border-bottom:1px solid #eee7e0;font:400 16px/1.5 Georgia,serif;color:#14110f;">${esc(value)}</td>
    </tr>`;
}

function template(d: Record<string, string>) {
  const name = [d.first_name, d.last_name].filter(Boolean).join(" ") || "Someone";
  const replyTo = d.email || "";
  return `<!doctype html>
<html><body style="margin:0;background:#f2efe9;padding:28px 12px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.08);">
    <tr>
      <td style="background:#14161d;padding:34px 36px;position:relative;">
        <div style="font:700 12px/1 'Helvetica Neue',Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#8FFF00;margin-bottom:12px;">Digital Networking Agency</div>
        <div style="font:700 28px/1.1 'Helvetica Neue',Arial,sans-serif;color:#ffffff;">New inquiry from ${esc(name)}</div>
      </td>
    </tr>
    <tr><td style="height:4px;background:#8FFF00;"></td></tr>
    <tr>
      <td style="padding:34px 36px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Email", d.email)}
          ${row("Phone", d.phone)}
          ${row("Website / social", d.website)}
          ${row("Publications", d.publications)}
          ${row("Featuring", d.featuring)}
          ${row("Budget", d.budget)}
          ${row("Timeline", d.timeline)}
          ${row("Message", d.message)}
        </table>

        ${
          replyTo
            ? `<div style="margin-top:28px;">
                 <a href="mailto:${esc(replyTo)}?subject=Re:%20your%20inquiry%20to%20Digital%20Networking%20Agency"
                    style="display:inline-block;background:#8FFF00;color:#101117;font:700 13px/1 'Helvetica Neue',Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;padding:16px 30px;border-radius:8px;">
                   Reply to ${esc(name)}
                 </a>
               </div>
               <p style="margin:18px 0 0;font:400 14px/1.5 Georgia,serif;color:#8a938c;">
                 You can also just hit reply — this email is set to reply directly to the sender.
               </p>`
            : ""
        }
      </td>
    </tr>
    <tr>
      <td style="background:#faf7f2;padding:20px 36px;font:400 12px/1.5 'Helvetica Neue',Arial,sans-serif;color:#a8a29a;border-top:1px solid #eee7e0;">
        Sent from digitalnetworkingagency.com/contact
      </td>
    </tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "Email not configured" },
      { status: 500 }
    );
  }

  let data: Record<string, string> = {};
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      form.forEach((v, k) => (data[k] = String(v)));
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  // honeypot: bots fill hidden "company_hp" field
  if (data.company_hp) return NextResponse.json({ ok: true });

  if (!data.email || !data.first_name) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const name = [data.first_name, data.last_name].filter(Boolean).join(" ") || "Someone";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: `New inquiry from ${name}`,
      html: template(data),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return NextResponse.json(
      { ok: false, error: "Send failed", detail },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
