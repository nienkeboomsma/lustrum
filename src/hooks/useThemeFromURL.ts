import theme, { MonthNumber } from '@/styles/theme'
import { getPaddedMonthString } from '@/utils/dateStrings'
import { isEnumValue } from '@/utils/enum'
import { usePathname } from 'next/navigation'

export default function useThemeFromURL() {
  const path = usePathname()
  const [date] = path.match(/\d{2}-\d{2}-\d{4}/) ?? []
  const urlMonth = date?.split('-')[1]

  const currentMonth = getPaddedMonthString(new Date())

  if (isEnumValue(MonthNumber, urlMonth)) {
    return theme[urlMonth]
  } else if (isEnumValue(MonthNumber, currentMonth)) {
    return theme[currentMonth]
  } else {
    return theme.default
  }
}
