import { ReactNode } from 'react'

import { Inter as FontSans } from '@next/font/google'
const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-latin'
})


import './globals.css'

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <html lang="en">
      <head />
      <body className={fontSans.variable}>
        <main>
          {children}
        </main>
      </body>
    </html >
  )
}

export default RootLayout
