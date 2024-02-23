export default function getUTCDateFromString(date: string) {
  const [day, month, year] = date.split('-')
  const UTC = Date.UTC(Number(year), Number(month) - 1, Number(day))
  return new Date(UTC)
}
