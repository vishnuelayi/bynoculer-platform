import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"   // ⚠️ this must stay here

import { BrandProvider } from "./context/brand-context"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrandProvider>
      <App />
    </BrandProvider>
  </React.StrictMode>
)