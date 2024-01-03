import type { Metadata } from 'next'
import { Merienda } from 'next/font/google'
import './globals.css'

import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

const inter = Merienda({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
