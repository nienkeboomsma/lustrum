export function getPaddedDateString(date: Date) {
  return date.getDate().toString().padStart(2, '0')
}

export function getPaddedMonthString(date: Date) {
  return date.getMonth().toString().padStart(2, '0')
}

export function getPaddedDayMonthYearString(date: Date) {
  return [
    getPaddedDateString(date),
    getPaddedMonthString(date),
    date.getFullYear(),
  ].join('-')
}
