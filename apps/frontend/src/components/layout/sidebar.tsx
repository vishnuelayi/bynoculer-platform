import { Home, BarChart3, Calendar, Sparkles } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white p-6 flex flex-col">
      
      <div className="text-xl font-semibold mb-10">
        Bynoculer
      </div>

      <nav className="flex flex-col gap-4 text-sm">

        <a className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
          <Home size={18} />
          Dashboard
        </a>

        <a className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
          <Sparkles size={18} />
          AI Insights
        </a>

        <a className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
          <Calendar size={18} />
          Calendar
        </a>

        <a className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
          <BarChart3 size={18} />
          Analytics
        </a>

      </nav>

    </div>
  )
}