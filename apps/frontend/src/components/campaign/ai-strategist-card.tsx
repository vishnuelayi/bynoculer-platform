import { Card } from "@/components/ui/card"

export function AIStrategistCard() {

  const suggestions = [
    "Create an Instagram teaser post introducing the campaign",
    "Publish a LinkedIn article explaining the campaign story",
    "Post a Twitter thread highlighting product features",
    "Schedule your main post around 7 PM for higher engagement",
  ]

  return (
    <Card className="p-6 space-y-4">

      <div className="text-lg font-semibold">
        AI Campaign Strategist
      </div>

      <div className="text-sm text-gray-600">
        Based on similar campaigns, here are some suggestions:
      </div>

      <ul className="list-disc ml-5 space-y-2 text-sm">
        {suggestions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

    </Card>
  )
}