import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans"
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: 'Iasmin Ateliê – Elegância que reflete sua essência',
  description: 'Moda feminina modesta e refinada, criada para mulheres que expressam identidade, delicadeza e propósito em cada detalhe.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#F9F5F1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable} bg-cream`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
