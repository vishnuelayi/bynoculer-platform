import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useBrand } from "@/context/brand-context";

export function Topbar() {

  const [brands, setBrands] = useState<any[]>([]);
  const { activeBrand, setActiveBrand } = useBrand();

  useEffect(() => {

    async function fetchBrands() {

      const res = await api.get("/brands");
      setBrands(res.data);

      if (res.data.length && !activeBrand) {
        setActiveBrand(res.data[0]);
      }

    }

    fetchBrands();

  }, []);

  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">

      <Input placeholder="Search..." className="w-64" />
      <div className="flex items-center gap-4">
      <select
        value={activeBrand?.id}
        onChange={(e) => {
          const brand = brands.find((b) => b.id === e.target.value);
          setActiveBrand(brand);
        }}
        className="border rounded px-3 py-1 text-sm"
      >
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <Avatar>
        <AvatarFallback>VE</AvatarFallback>
      </Avatar>
      </div>

     

    </div>
  );
}