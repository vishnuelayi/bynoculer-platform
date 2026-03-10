import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AIStrategistCard } from "@/components/campaign/ai-strategist-card";
import { AIPostGenerator } from "@/components/campaign/ai-post-generator";

export function CampaignsPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [brandId, setBrandId] = useState("");
  const [name, setName] = useState("");

  const fetchBrands = async () => {
    const res = await api.get("/brands");
    setBrands(res.data);

    if (res.data.length > 0) {
      setBrandId(res.data[0].id);
    }
  };

  const fetchCampaigns = async (brandId: string) => {
    const res = await api.get(`/campaigns?brandId=${brandId}`);
    setCampaigns(res.data);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (brandId) {
      fetchCampaigns(brandId);
    }
  }, [brandId]);

  const createCampaign = async () => {
    if (!name || !brandId) return;

    await api.post("/campaigns", {
      name,
      brandId,
    });

    setName("");
    fetchCampaigns(brandId);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">Create Campaign</h2>

        <select
          value={brandId}
          onChange={(e) => setBrandId(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>

        <Input
          placeholder="Campaign name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <AIStrategistCard />

        <AIPostGenerator campaignName="Summer Launch" />

        <Button onClick={createCampaign}>Create Campaign</Button>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="p-6">
            <h3 className="font-semibold">{campaign.name}</h3>
            <p className="text-sm text-gray-500">Status: {campaign.status}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
