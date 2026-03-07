import { Card } from "@/components/ui/card"

export function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <Card className="p-6">
        AI Insights
      </Card>

      <Card className="p-6">
        Campaign Performance
      </Card>

      <Card className="p-6">
        Upcoming Posts
      </Card>

    </div>
  )
}