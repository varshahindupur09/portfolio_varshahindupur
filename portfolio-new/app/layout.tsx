import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Varsha Hindupur | Portfolio',
  description: 'Varsha is a versatile technology professional with over 5 years of industry experience, specializing in Software Testing, Full Stack Development, and Data Engineering.',
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
