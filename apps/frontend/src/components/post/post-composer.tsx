import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBrand } from "@/context/brand-context";

export function PostComposer() {

  const { activeBrand } = useBrand();

  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [campaignId, setCampaignId] = useState("");

  const [content, setContent] = useState("");

  const [tone, setTone] = useState("friendly");
  const [goal, setGoal] = useState("engagement");

  const [instagram, setInstagram] = useState(true);
  const [facebook, setFacebook] = useState(false);

  const [schedule, setSchedule] = useState("");
  const [generating, setGenerating] = useState(false);

  const fetchCampaigns = async () => {

    if (!activeBrand) return;

    const res = await api.get(`/campaigns?brandId=${activeBrand.id}`);
    setCampaigns(res.data);

    if (res.data.length) {
      setCampaignId(res.data[0].id);
    }

  };

  useEffect(() => {

    fetchCampaigns();

  }, [activeBrand]);

  const generateAI = async () => {

    const campaign = campaigns.find((c) => c.id === campaignId);

    setGenerating(true);

    try {

      const res = await api.post("/ai/generate-post", {
        brandName: activeBrand?.name,
        campaignName: campaign?.name,
        tone,
        goal,
        platforms: {
          instagram,
          facebook
        }
      });

      setContent(res.data.content);

    } catch (err) {

      console.error(err);

    }

    setGenerating(false);

  };

  const createPost = async () => {

    try {

      await api.post("/posts", {
        content,
        campaignId,
        platform: instagram ? "instagram" : "facebook",
        scheduledAt: schedule || null
      });

      setContent("");
      alert("Post created");

    } catch (err) {

      console.error(err);

    }

  };

  const autoSchedule = () => {

    const now = new Date();

    const randomDays = Math.floor(Math.random() * 7);
    const randomHours = Math.floor(Math.random() * 12) + 8;

    const randomDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + randomDays,
      randomHours,
      0
    );

    const iso = randomDate.toISOString().slice(0, 16);

    setSchedule(iso);

  };

  return (

    <Card className="p-6 space-y-6">

      <h2 className="text-lg font-semibold">
        Create Post
      </h2>

      {/* Campaign */}

      <select
        value={campaignId}
        onChange={(e) => setCampaignId(e.target.value)}
        className="border rounded p-2 w-full"
      >
        {campaigns.map((campaign) => (
          <option key={campaign.id} value={campaign.id}>
            {campaign.name}
          </option>
        ))}
      </select>

      {/* Tone + Goal */}

      <div className="grid grid-cols-2 gap-4">

        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="border rounded p-2"
        >
          <option value="friendly">Friendly</option>
          <option value="professional">Professional</option>
          <option value="exciting">Exciting</option>
          <option value="educational">Educational</option>
          <option value="humorous">Humorous</option>
        </select>

        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border rounded p-2"
        >
          <option value="engagement">Engagement</option>
          <option value="promotion">Promotion</option>
          <option value="announcement">Announcement</option>
          <option value="education">Education</option>
        </select>

      </div>

      {/* Content */}

      <div className="space-y-3">

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded p-3 w-full h-32"
          placeholder="Write your post..."
        />

        <div className="flex gap-3">

          <Button onClick={generateAI} disabled={generating}>
            {generating ? "Generating..." : "Generate AI"}
          </Button>

          <Button variant="outline" onClick={generateAI}>
            Regenerate
          </Button>

        </div>

      </div>

      {/* Media */}

      <div className="border rounded p-6 text-sm text-gray-500">
        Media Upload (Coming Soon)
      </div>

      {/* Platforms */}

      <div className="flex gap-6 text-sm">

        <label>
          <input
            type="checkbox"
            checked={instagram}
            onChange={(e) => setInstagram(e.target.checked)}
          />
          Instagram
        </label>

        <label>
          <input
            type="checkbox"
            checked={facebook}
            onChange={(e) => setFacebook(e.target.checked)}
          />
          Facebook
        </label>

      </div>

      {/* Schedule */}

      <div className="flex gap-4">

        <input
          type="datetime-local"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="border rounded p-2"
        />

        <Button variant="secondary" onClick={autoSchedule}>
          Auto
        </Button>

      </div>

      <div className="pt-4">

        <Button className="w-full" onClick={createPost}>
          Create Post
        </Button>

      </div>

    </Card>

  );

}