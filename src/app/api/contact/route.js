import nodemailer from "nodemailer";

export const runtime = 'nodejs';       // ✅ added
export const dynamic = 'force-dynamic'; // ✅ added

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const name = data.name || data.fullName || "Anonymous";
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${data.email || ''}
        ${data.phone ? `Phone: ${data.phone}` : ''}
        ${data.language ? `Service / Technology: ${data.language}` : ''}
        Message: ${data.message || ''}
      `,
    });

    return new Response(JSON.stringify({ message: "Message sent!" }), { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(JSON.stringify({ message: "Failed to send" }), { status: 500 });
  }
}
