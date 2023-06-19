import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-2xl flex flex-col justify-center items-center w-full m-auto min-h-screen text-white'>
          <Navbar />
            <div className='w-full'>
            {children}
            </div>
        </main>
      </body>
    </html>
  )
}
