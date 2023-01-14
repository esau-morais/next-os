import { ReactNode } from 'react'

import { Space_Grotesk as FontSans } from '@next/font/google'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-space_grotesk'
})

import './globals.css'
import { cx } from '@/utils/classNames'

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
