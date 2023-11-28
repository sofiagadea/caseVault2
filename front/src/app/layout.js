import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CaseVault',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={'${inter.className} bg-slate-800 text-slate-100'}>{children}</body>
    </html>
  )
}
 