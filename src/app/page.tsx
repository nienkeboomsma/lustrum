import { getPaddedDayMonthYearString } from '@/utils/getPaddedDateString'
import { redirect } from 'next/navigation'

export default function Home() {
  const dateString = getPaddedDayMonthYearString(new Date())
  const href = `/day/${dateString}`

  redirect(href)
}
