import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vignesh - Portfolio',
  description: 'Portfolio de Vignesh Tillaisababady',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-9V0S2MQ677" />
    </html>
  )
}
