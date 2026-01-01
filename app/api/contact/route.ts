import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    // Validate required fields
    const { name, firstName, email, subject, message } = body;
    if (!name || !firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY);
    
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@ebe-consulting.fr',
      to: process.env.EMAIL_TO || 'contact@ebe-consulting.fr',
      subject: `Contact EBE Consulting: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name} ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${body.phone || 'Non renseigné'}</p>
        <p><strong>Société:</strong> ${body.company || 'Non renseigné'}</p>
        <p><strong>Taille:</strong> ${body.size || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // For now, return success (in production, implement email sending)
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

