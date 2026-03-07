import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BrandsPage() {

  const [brands, setBrands] = useState<any[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const fetchBrands = async () => {
    const res = await api.get("/brands")
    setBrands(res.data)
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  const createBrand = async () => {

    if (!name) return

    await api.post("/brands", {
      name,
      description
    })

    setName("")
    setDescription("")

    fetchBrands()
  }

  return (
    <div className="space-y-6">

      <Card className="p-6 space-y-4">

        <h2 className="text-lg font-semibold">
          Create Brand
        </h2>

        <Input
          placeholder="Brand name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button onClick={createBrand}>
          Create
        </Button>

      </Card>

      <div className="grid grid-cols-3 gap-6">

        {brands.map((brand) => (
          <Card key={brand.id} className="p-6">

            <h3 className="font-semibold">
              {brand.name}
            </h3>

            <p className="text-sm text-gray-500">
              {brand.description}
            </p>

          </Card>
        ))}

      </div>

    </div>
  )
}