'use server'

import Post, { ServerSidePost } from '@/models/posts'
import connectToDB from '@/services/mongodb'
import { getPaddedDayMonthYearString } from '@/utils/getPaddedDateString'
import { ClientSidePost } from '@/utils/getPostsByDate'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const createPayload = (
  content: ClientSidePost['content'],
  date: Date,
  postId?: string
) => {
  const absoluteDate = date
  // represent the local date in UTC format to prevent timezone shenanigans
  const timeOffset = date.getTimezoneOffset()
  const localDate = new Date(date.valueOf() - timeOffset * 60 * 1000)

  const payload = {
    content,
    localDate,
    timeOffset,
    absoluteDate,
    ...(postId && { id: postId }),
  } as unknown as ServerSidePost // TODO: is there a better way around this?

  return payload
}

const revalidate = () => {
  revalidatePath('/(posts)/[view]/[date]', 'page')
}

const redirectToPage = (date: Date, view: string) => {
  const slug = getPaddedDayMonthYearString(date)
  const href = `/${view}/${slug}`

  redirect(href)
}

export async function addPost(
  content: ClientSidePost['content'],
  date: Date,
  view: string
) {
  const payload = createPayload(content, date)
  const newPost = new Post(payload)

  await connectToDB()
  await newPost.save()

  revalidate()
  redirectToPage(date, view)
}

export async function editPost(
  postId: string,
  content: ClientSidePost['content'],
  date: Date
) {
  const payload = createPayload(content, date, postId)

  await connectToDB()
  await Post.findByIdAndUpdate(postId, payload)

  revalidate()
}

export async function deletePost(post: ClientSidePost) {
  await connectToDB()
  await Post.findByIdAndDelete(post.id)

  revalidate()
}
