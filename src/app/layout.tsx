import { ReactNode } from 'react'

import { Space_Grotesk as FontSans } from 'next/font/google'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-space_grotesk'
})

import './globals.css'
import { cx } from '@/utils/classNames'

export const metadata = {
  title: 'Open Shot | Generate Images using AI',
  description: 'Generate Images using AI',
  openGraph: {
    locale: 'en-UK',
    type: 'website',
    url: 'https://os.emots.dev',
    title: 'Open Shot | Generate Images using AI',
    description: 'Generate Images using AI',
    images: {
      url: 'https://os.emots.dev',
      width: 1600,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://os.emots.dev',
    title: 'Open Shot | Generate Images using AI',
    description: 'Generate Images using AI',
    images: {
      url: 'https://os.emots.dev/og_image.png',
      width: 1600,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en" className={cx(
      'bg-dark text-light',
      fontSans.variable
    )}>
      <head />
      <body className='min-h-screen w-full'>
        <main className='mb-8 p-4 md:mx-auto md:max-w-3xl'>
          {children}
        </main>
        <footer className='absolute inset-x-0 flex items-center justify-center p-4'>
          <p>Copyright © {currentYear}</p>
          <a
            className='ml-2 underline decoration-light decoration-wavy underline-offset-4 hover:decoration-lighter'
            href="https://github.com/esau-morais/next-os"
            target="_blank"
            rel="noreferrer"
          >
            Open Shot
          </a>
        </footer>
      </body>
    </html >
  )
}

export default RootLayout
