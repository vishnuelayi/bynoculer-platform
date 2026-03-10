import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layouts/dashboard-layout"
import { DashboardPage } from "./pages/dashboard"
import { BrandsPage } from "./pages/brands"
import { CampaignsPage } from "./pages/campaigns"
import { CalendarPage } from "./pages/calendar"
import { PostsPage } from "./pages/posts"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App