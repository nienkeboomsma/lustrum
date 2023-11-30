'use client'

import { ThemeProvider } from 'styled-components'
import theme, { MonthNumber } from '@/styles/theme'
import { isEnumValue } from '@/utils/enum'

export default function PostsLayout({
  params: { date },
  children,
}: {
  params: { date: string }
  children: React.ReactNode
}) {
  const month = date.split('-')[1]
  const currentMonth = new Date().getMonth().toString().padStart(2, '0')

  let chosenTheme

  if (isEnumValue(MonthNumber, month)) {
    chosenTheme = theme[month]
  } else if (isEnumValue(MonthNumber, currentMonth)) {
    chosenTheme = theme[currentMonth]
  } else {
    chosenTheme = theme.default
  }

  return <ThemeProvider theme={chosenTheme}>{children}</ThemeProvider>
}
