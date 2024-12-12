import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Please fill in all fields.' }, { status: 400 });
    }

    const transportOptions: SMTPTransport.Options = {
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      auth: {
        user: process.env.EMAIL_USER || 'rakeshgowda495758@gmail.com',
        pass: process.env.EMAIL_PASS || 'kpay dojc eaze gfvu',
      },
      secure: false,
    };

    const transporter = nodemailer.createTransport(transportOptions);

    await transporter.verify();
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: 'rakeshgr.cs@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('[Email - POST]: Error sending email: ', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}