import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Providers } from "./providers";

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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
