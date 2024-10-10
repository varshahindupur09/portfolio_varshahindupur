import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Varsha Hindupur | Portfolio',
  description: 'Varsha is a Software Tester, Full Stack Software Developer, and Data Engineer enthusiast, with 5+ years industry experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        {children}
        </body>
    </html>
  )
}
