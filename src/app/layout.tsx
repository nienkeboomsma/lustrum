import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Lustrum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='root'>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
