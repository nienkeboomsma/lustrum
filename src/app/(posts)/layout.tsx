'use client'

import { ThemeProvider } from 'styled-components'
import useThemeFromURL from '@/hooks/useThemeFromURL'
import GlobalStyles from '@/styles/GlobalStyles'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const chosenTheme = useThemeFromURL()

  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
