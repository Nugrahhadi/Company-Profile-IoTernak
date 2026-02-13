import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * ALTERNATIF SETUP DENGAN RESEND
 *
 * Resend adalah platform email terbaru yang dirancang khusus untuk Next.js
 * Lebih reliable, mudah setup, dan memiliki rate limit yang generous
 *
 * Setup:
 * 1. npm install resend
 * 2. Daftar di https://resend.com
 * 3. Generate API key di https://resend.com/api-keys
 * 4. Tambah ke .env.local:
 *    RESEND_API_KEY=re_xxxxxxxxxxxxx
 *    SENDER_EMAIL=noreply@ioternak.com (atau domain Anda)
 * 5. Uncomment code di bawah dan comment nodemailer version
 */

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, company, subject, message } = await request.json();

//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Email ke admin
//     await resend.emails.send({
//       from: process.env.SENDER_EMAIL || 'noreply@ioternak.com',
//       to: 'maggenzim@gmail.com',
//       replyTo: email,
//       subject: `New Contact Form: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px;">
//           <h2 style="color: #009312;">New Message from Contact Form</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
//           <p><strong>Subject:</strong> ${subject}</p>
//           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//           <h3>Message:</h3>
//           <p>${message.replace(/\n/g, '<br>')}</p>
//         </div>
//       `,
//     });

//     // Confirmation email ke user
//     await resend.emails.send({
//       from: process.env.SENDER_EMAIL || 'noreply@ioternak.com',
//       to: email,
//       subject: 'We Received Your Message - Maggenzim',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px;">
//           <h2 style="color: #009312;">Thank you, ${name}!</h2>
//           <p>We received your message and will get back to you as soon as possible.</p>
//           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//           <h3>Your Message Summary:</h3>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message.replace(/\n/g, '<br>')}</p>
//           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//           <p>Best regards,<br><strong>Maggenzim Team</strong></p>
//         </div>
//       `,
//     });

//     return NextResponse.json(
//       { message: 'Email sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Email error:', error);
//     return NextResponse.json(
//       {
//         message: 'Failed to send email. Please try again later.',
//       },
//       { status: 500 }
//     );
//   }
// }
