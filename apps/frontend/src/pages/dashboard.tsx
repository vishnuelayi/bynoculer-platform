import { Card } from "@/components/ui/card"
import { AIInsightCard } from "@/components/dashboard/ai-insight-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

export function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <AIInsightCard />

      <Card className="p-6">
        Campaign Performance
      </Card>

      <ActivityFeed />

    </div>
  )
}