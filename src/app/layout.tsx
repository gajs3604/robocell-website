import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'RoboCell - NIT Durgapur | Robotics & Embedded Systems Club',
  description: 'Official website of RoboCell, the premier robotics and embedded systems club under Centre for Cognitive Activities (CCA), NIT Durgapur. Engineering the future of automation.',
  keywords: 'robotics, embedded systems, NIT Durgapur, automation, engineering, RoboCell, CCA',
  authors: [{ name: 'RoboCell Team' }],
  openGraph: {
    title: 'RoboCell - Engineering the Future of Automation',
    description: 'Join RoboCell at NIT Durgapur for cutting-edge robotics and embedded systems projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoboCell - NIT Durgapur',
    description: 'Engineering the future of automation through robotics and embedded systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950">
          {children}
        </div>
      </body>
    </html>
  )
}
