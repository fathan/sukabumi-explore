import type { Metadata } from 'next'
import { Providers } from "./providers";
import './../styles/globals.css'

export const metadata: Metadata = {
  title: 'Cari Tempat Kota Sukabumi',
  description: 'Aplikasi pencarian lokasi di Kota Sukabumi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
