import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layouts/dashboard-layout"
import { DashboardPage } from "./pages/dashboard"
import { BrandsPage } from "./pages/brands"
import { CampaignsPage } from "./pages/campaigns"
import { CalendarPage } from "./pages/calendar"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App