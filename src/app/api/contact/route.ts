// Consultation requests. Delivered by email through Resend.
// Needs RESEND_API_KEY, CONTACT_TO and CONTACT_FROM. Until those are set the
// route answers "not_configured" and the form says so plainly.

type Body = Record<string, unknown>;

const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: real people never fill this in.
  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, 200);
  const email = text(body.email, 320);
  const message = text(body.message, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${text(body.company, 200) || "-"}`,
    `Phone: ${text(body.phone, 60) || "-"}`,
    `Project location: ${text(body.location, 200) || "-"}`,
    `Commodity: ${text(body.commodity, 200) || "-"}`,
    "",
    message,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `Consultation request from ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) return Response.json({ error: "send_failed" }, { status: 502 });
  return Response.json({ ok: true });
}
