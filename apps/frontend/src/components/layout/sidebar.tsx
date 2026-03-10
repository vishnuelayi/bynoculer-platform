import { Home, BarChart3, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white p-6 flex flex-col">
      <div className="text-xl font-semibold mb-10">Bynoculer</div>

      <nav className="flex flex-col gap-4 text-sm">
        <Link
          to="/"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          to="/brands"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <Sparkles size={18} />
          Brands
        </Link>

        <Link
          to="/campaigns"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <Sparkles size={18} />
          Campaigns
        </Link>

        <Link
          to="/calendar"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <Calendar size={18} />
          Calendar
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <BarChart3 size={18} />
          Analytics
        </Link>
      </nav>
    </div>
  );
}
