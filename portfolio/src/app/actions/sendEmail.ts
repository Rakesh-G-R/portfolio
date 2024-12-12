'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const userEmail = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !userEmail || !message) {
    return { success: false, message: 'Please fill in all fields.' }
  }

  console.log(process.env.NEXT_PUBLIC_EMAIL_USER ,"EMAIL_USER")
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    auth: {
      user: 'rakeshgowda495758@gmail.com',
      pass: 'kpay dojc eaze gfvu',
    },
    secure: false, // Use TLS
    family: 4, // Force IPv4
  })

  try {
    // Verify transporter
    await transporter.verify()
    console.log('Transporter verified successfully')

    // Send email
    const info = await transporter.sendMail({
      from: `${name} <${userEmail}>`, // Set the user's name and email as the sender
      to: 'rakeshgr.cs@gmail.com', // Your email address
      subject: `New message from ${name}`, // Subject line
      text: `
        Name: ${name}
        Email: ${userEmail}
        Message: ${message}
      `, // Plain text
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, // HTML formatted message
    })

    console.log('Message sent: %s', info.messageId)
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { 
      success: false, 
      message: 'Failed to send email. Please try again later.',
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
