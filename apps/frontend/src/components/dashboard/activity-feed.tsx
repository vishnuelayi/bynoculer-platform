import { Card } from "@/components/ui/card"

const activities = [
  {
    id: 1,
    message: "Rahul scheduled a post for Brand A.",
  },
  {
    id: 2,
    message: "Your team added a new brand.",
  },
  {
    id: 3,
    message: "Engagement increased 12% this week.",
  },
]

export function ActivityFeed() {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-semibold">Team Activity</h2>

      <div className="space-y-3 text-sm text-gray-600">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b pb-2 last:border-none">
            {activity.message}
          </div>
        ))}
      </div>
    </Card>
  )
}