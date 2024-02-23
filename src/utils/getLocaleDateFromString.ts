import getUTCDateFromString from './getUTCDateFromString'

export default function getLocaleDateFromString(date: string) {
  const dateObj = getUTCDateFromString(date)
  const localeDate = dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return localeDate.split(' ')
}
