export function getLocaleDate(date: string, output: 'day' | 'month' | 'year') {
  const [day, month, year] = date.split('-')
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day))
  const localeDate = dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const [localeDay, localeMonth, localeYear] = localeDate.split(' ')

  switch (output) {
    case 'day':
      return localeDay
    case 'month':
      return localeMonth
    case 'year':
      return localeYear
  }
}
