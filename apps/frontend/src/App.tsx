import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layouts/dashboard-layout"
import { DashboardPage } from "./pages/dashboard"
import { BrandsPage } from "./pages/brands"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/brands" element={<BrandsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App