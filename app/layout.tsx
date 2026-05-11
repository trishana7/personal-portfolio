import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Trishana Rai | Full-Stack Application Developer'

const description =
  "Skilled full-stack application developer in Chicago. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  openGraph: {
    title,
    description,
    siteName: 'Trishana Rai Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}
