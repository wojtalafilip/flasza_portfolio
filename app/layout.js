'use client'

import { Inter_Tight } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { ReduxProvider } from '@/src/redux/provider'

const interTight = Inter_Tight({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const bodyClasses = `${interTight.className} container mx-auto min-w-min max-w-5xl overflow-y-scroll px-6 pb-24 pt-4 sm:px-8 sm:pt-6`

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
