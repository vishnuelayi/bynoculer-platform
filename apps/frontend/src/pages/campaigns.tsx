import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AIStrategistCard } from "@/components/campaign/ai-strategist-card";
import { useBrand } from "@/context/brand-context";

export function CampaignsPage() {
  const { activeBrand } = useBrand();

  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [name, setName] = useState("");

  const fetchCampaigns = async () => {
    if (!activeBrand) return;

    const res = await api.get(`/campaigns?brandId=${activeBrand.id}`);
    setCampaigns(res.data);
  };

  useEffect(() => {
    fetchCampaigns();
  }, [activeBrand]);

  const createCampaign = async () => {
    if (!name || !activeBrand) return;

    await api.post("/campaigns", {
      name,
      brandId: activeBrand.id,
    });

    setName("");
    fetchCampaigns();
  };

  return (
    <div className="space-y-6">
      {/* Create Campaign */}

      <Card className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">Create Campaign</h2>

        <Input
          placeholder="Campaign name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button onClick={createCampaign}>Create Campaign</Button>
      </Card>

      {/* AI Strategist */}

      <AIStrategistCard />

      {/* Campaign List */}
      <h1 className="text-xl font-semibold">{activeBrand?.name} Campaigns</h1>
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
