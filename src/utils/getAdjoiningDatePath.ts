import getUTCDateFromString from './getUTCDateFromString'
import { getPaddedDayMonthYearString } from './getPaddedDateString'

export default function getAdjoiningDatePath(increment: -1 | 1, path: string) {
  const [, view, date] = path.split('/')
  const newDate = getUTCDateFromString(date)

  if (view === 'day') newDate.setUTCDate(newDate.getUTCDate() + increment)
  if (view === 'month') newDate.setUTCMonth(newDate.getUTCMonth() + increment)

  const newPath = `/${view}/${getPaddedDayMonthYearString(newDate)}`

  return newPath
}
