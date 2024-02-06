import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Page Views by Jesse Roper',
  description: 'Next.js + Vercel KV + Redis database',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
