
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeSwitcher from './ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expedia - Your AI Travel Assistant',
  description: "Don't just travel, Travel right. Plan your trips with ease using our AI-powered travel assistant.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground dark:bg-foreground dark:text-background`}>
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  )
}
