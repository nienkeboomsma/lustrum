import themes, { MonthNumber } from '@/styles/theme'
import { getPaddedMonthString } from '@/utils/getPaddedDateString'
import { isEnumValue } from '@/utils/enum'
import { usePathname } from 'next/navigation'

export default function useThemeFromURL() {
  const path = usePathname()
  const [date] = path.match(/\d{2}-\d{2}-\d{4}/) ?? []
  const urlMonth = date?.split('-')[1]

  const currentMonth = getPaddedMonthString(new Date())

  if (isEnumValue(MonthNumber, urlMonth)) {
    return themes[urlMonth]
  } else if (isEnumValue(MonthNumber, currentMonth)) {
    return themes[currentMonth]
  } else {
    return themes.default
  }
}
