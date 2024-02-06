import { kv } from '@vercel/kv'

export default async function ViewCounter() {
  const views = await kv.incr('views')

  return (
    <p className="text-6xl text-slate-900">
      {Intl.NumberFormat('en-us').format(views)} views
    </p>
  )
}
