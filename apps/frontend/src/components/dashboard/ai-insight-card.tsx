import { Card } from "@/components/ui/card"

export function AIInsightCard() {

  const userName = "Vishnu"

  return (
    <Card className="p-6 space-y-3">

      <div className="text-lg font-semibold">
        Good morning {userName} ☀️
      </div>

      <p className="text-sm text-gray-600">
        Your team's engagement increased <span className="font-medium">14%</span> this week.
      </p>

      <p className="text-sm text-gray-600">
        Educational posts are performing best right now.
      </p>

      <p className="text-sm text-gray-600">
        Consider posting another tutorial today.
      </p>

    </Card>
  )
}