import { NextRequest, NextResponse } from "next/server";
import { syncAccompagnementInMessage } from "@/lib/contact-subjects";
import {
  isContactEmailConfigured,
  sendContactEmail,
} from "@/lib/send-contact-email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const { name, firstName, email, subject, message } = body;
    if (!name || !firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(String(email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!isContactEmailConfigured()) {
      console.error(
        "Contact API: SMTP non configuré (SMTP_HOST, SMTP_USER, SMTP_PASS)"
      );
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      );
    }

    const subjectTrimmed = String(subject).trim();
    const messageTrimmed = syncAccompagnementInMessage(
      String(message).trim(),
      subjectTrimmed
    );

    await sendContactEmail({
      name: String(name).trim(),
      firstName: String(firstName).trim(),
      email: String(email).trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      company: body.company ? String(body.company).trim() : undefined,
      size: body.size ? String(body.size).trim() : undefined,
      subject: subjectTrimmed,
      message: messageTrimmed,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
