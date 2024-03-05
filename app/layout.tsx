import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700'
    },
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900'
    },
  ]
});

export const metadata: Metadata = {
  title: 'Cookie Consent',
  description: 'Expert-led Cookie Management Services. Tailored for Your Business Needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
