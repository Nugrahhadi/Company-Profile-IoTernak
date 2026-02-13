import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "ioternakecosystem@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, subject, message } = await request.json();

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email ke admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "ioternakecosystem@gmail.com",
      to: "ioternakecosystem@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Email konfirmasi ke user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "ioternakecosystem@gmail.com",
      to: email,
      subject: "We Received Your Message - IoTernak",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We received your message and will get back to you as soon as possible.</p>
        <hr>
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>IoTernak Team</p>
      `,
    };

    // Kirim kedua email
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        message:
          "Failed to send email. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}
