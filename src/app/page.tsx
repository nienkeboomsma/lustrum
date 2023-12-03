import { getPaddedDayMonthYearString } from '@/utils/dateStrings'
import { redirect } from 'next/navigation'

export default function Home() {
  const dateString = getPaddedDayMonthYearString(new Date())
  const href = `/posts/day/${dateString}`

  redirect(href)
}
