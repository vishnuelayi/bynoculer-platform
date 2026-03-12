import { Card } from "@/components/ui/card"

export function PostPreview({
  brandName,
  content,
  instagram,
  facebook
}: {
  brandName?: string
  content: string
  instagram: boolean
  facebook: boolean
}) {

  return (

    <Card className="p-6 space-y-4">

      <h3 className="font-semibold text-lg">
        Post Preview
      </h3>

      {instagram && (
        <div className="border rounded p-4 space-y-2">

          <div className="text-sm font-semibold">
            Instagram Preview
          </div>

          <div className="text-xs text-gray-500">
            {brandName}
          </div>

          <div className="text-sm whitespace-pre-line">
            {content || "Your Instagram post preview will appear here."}
          </div>

        </div>
      )}

      {facebook && (
        <div className="border rounded p-4 space-y-2">

          <div className="text-sm font-semibold">
            Facebook Preview
          </div>

          <div className="text-xs text-gray-500">
            {brandName}
          </div>

          <div className="text-sm whitespace-pre-line">
            {content || "Your Facebook post preview will appear here."}
          </div>

        </div>
      )}

    </Card>

  )
}