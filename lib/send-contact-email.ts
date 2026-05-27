import nodemailer from "nodemailer";

export type ContactEmailPayload = {
  name: string;
  firstName: string;
  email: string;
  phone?: string;
  company?: string;
  size?: string;
  subject: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildTextBody(data: ContactEmailPayload): string {
  return [
    "Nouvelle demande via le site EBE Consulting",
    "",
    `Nom : ${data.name} ${data.firstName}`,
    `Email : ${data.email}`,
    `Téléphone : ${data.phone || "Non renseigné"}`,
    `Société : ${data.company || "Non renseignée"}`,
    `Taille : ${data.size || "Non renseignée"}`,
    `Accompagnement : ${data.subject}`,
    "",
    "Message :",
    data.message,
  ].join("\n");
}

function buildHtmlBody(data: ContactEmailPayload): string {
  const lines = [
    ["Nom", `${data.name} ${data.firstName}`],
    ["Email", data.email],
    ["Téléphone", data.phone || "Non renseigné"],
    ["Société", data.company || "Non renseignée"],
    ["Taille", data.size || "Non renseignée"],
    ["Accompagnement", data.subject],
  ];

  const rows = lines
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#3E4A4F;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#1D1D1F;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;color:#1D1D1F;">
      <h2 style="color:#3E4A4F;margin:0 0 16px;">Nouvelle demande — EBE Consulting</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">${rows}</table>
      <p style="font-weight:600;color:#3E4A4F;margin:0 0 8px;">Message</p>
      <p style="white-space:pre-wrap;line-height:1.5;margin:0;">${escapeHtml(data.message)}</p>
    </div>
  `.trim();
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" || port === 465;

  return { host, port, secure, user, pass };
}

export function isContactEmailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export async function sendContactEmail(
  data: ContactEmailPayload
): Promise<void> {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  const to = process.env.EMAIL_TO || "eb@ebeconsulting.fr";
  const from =
    process.env.EMAIL_FROM || `"EBE Consulting" <${smtp.user}>`;

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
    // OVH (ssl0.ovh.net) : port 587 = STARTTLS
    ...(smtp.port === 587 && !smtp.secure
      ? { requireTLS: true }
      : {}),
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: `"${data.firstName} ${data.name}" <${data.email}>`,
    subject: `EBE Consulting — ${data.subject}`,
    text: buildTextBody(data),
    html: buildHtmlBody(data),
  });
}
