import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quick AI',
  description:
    'The chatbot developed with VercelSDK is the perfect solution for improving customer service and simplifying processes, 24 hours a day, 7 days a week.',
  creator: 'Rodrigo Silva',
  authors: [
    {
      name: 'Rodrigo Silva',
      url: 'https://rodrigojs.dev',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
