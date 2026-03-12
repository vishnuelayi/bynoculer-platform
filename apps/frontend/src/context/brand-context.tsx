import { createContext, useContext, useState } from "react"

type Brand = {
  id: string
  name: string
}

type BrandContextType = {
  activeBrand?: Brand
  setActiveBrand: (brand: Brand) => void
}

const BrandContext = createContext<BrandContextType>({
  setActiveBrand: () => {}
})

export function BrandProvider({ children }: { children: React.ReactNode }) {

  const [activeBrand, setActiveBrand] = useState<Brand>()

  return (
    <BrandContext.Provider value={{ activeBrand, setActiveBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

export function useBrand() {
  return useContext(BrandContext)
}