'use client'

import { ThemeProvider } from 'styled-components'
import useThemeFromURL from '@/hooks/useThemeFromURL'
import theme, { MonthNumber } from '@/styles/theme'
import { isEnumValue } from '@/utils/enum'
import GlobalStyles from '@/styles/GlobalStyles'

export default function PostsLayout({
  params: { date },
  children,
}: {
  params: { date: string }
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
