import { getPaddedDayMonthYearString } from './getPaddedDateString'

export const getAdjoiningDatePath = (increment: -1 | 1, path: string) => {
  const [, view, date] = path.split('/')
  const [dayString, monthString, yearString] = date.split('-')
  const [day, month, year] = [
    Number(dayString),
    Number(monthString),
    Number(yearString),
  ]

  const currentDate = Date.UTC(year, month - 1, day)
  const newDate = new Date(currentDate)

  if (view === 'day') newDate.setUTCDate(newDate.getUTCDate() + increment)
  if (view === 'month') newDate.setUTCMonth(newDate.getUTCMonth() + increment)

  const newPath = `/${view}/${getPaddedDayMonthYearString(newDate)}`

  return newPath
}
