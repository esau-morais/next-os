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
  return (
    <html lang="en" className={cx(
      'bg-dark text-light',
      fontSans.variable
    )}>
      <head />
      <body className='min-h-screen w-full'>
        <main className='p-4 md:mx-auto md:max-w-3xl'>
          {children}
        </main>
      </body>
    </html >
  )
}

export default RootLayout
