import { useState } from "react"
import { api } from "@/services/api"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AIPostGenerator({ campaignName }: { campaignName: string }) {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState("")

  const generatePost = async () => {
    setLoading(true)

    try {
      const res = await api.post("/ai/generate-post", {
        campaignName,
        platform: "instagram",
      })

      setContent(res.data.content)
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="text-lg font-semibold">
        AI Post Generator
      </div>

      <Button onClick={generatePost} disabled={loading}>
        {loading ? "Generating..." : "Generate Post"}
      </Button>

      {content && (
        <div className="text-sm border rounded p-4 bg-gray-50">
          {content}
        </div>
      )}
    </Card>
  )
}