import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Card } from "@/components/ui/card"

export function CalendarPage() {
  const [posts, setPosts] = useState<any[]>([])

  const fetchPosts = async () => {
    const res = await api.get("/posts")
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const grouped = posts.reduce((acc: any, post: any) => {
    const date = new Date(post.scheduledAt || post.createdAt).toDateString()
    acc[date] = acc[date] || []
    acc[date].push(post)
    return acc
  }, {})

  return (
    <div className="space-y-6">

      <h1 className="text-xl font-semibold">
        Content Calendar
      </h1>

      {Object.keys(grouped).map((date) => (
        <Card key={date} className="p-6 space-y-3">

          <div className="font-semibold">{date}</div>

          {grouped[date].map((post: any) => (
            <div
              key={post.id}
              className="text-sm border rounded p-3"
            >
              <div>{post.content}</div>
              <div className="text-gray-500 text-xs">
                {post.platform}
              </div>
            </div>
          ))}

        </Card>
      ))}

    </div>
  )
}