import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rakesh GR - Full Stack & MERN Stack Developer',
  description: 'Portfolio of Rakesh GR, a skilled Full Stack and MERN Stack Developer specializing in creating powerful web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

