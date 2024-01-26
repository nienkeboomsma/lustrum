export function getLocaleDateFromString(date: string) {
  const [day, month, year] = date.split('-')
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day))
  const localeDate = dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return localeDate.split(' ')
}
