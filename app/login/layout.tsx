import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Consent | Login',
  description: 'Expert-led Cookie Management Services. Tailored for Your Business Needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
