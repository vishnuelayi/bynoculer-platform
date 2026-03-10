import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";
import brandRoutes from "./routes/brand.routes";
import campaignRoutes from "./routes/campaign.routes"
import postRoutes from "./routes/post.routes"
import aiRoutes from "./routes/ai.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);
app.use("/api", brandRoutes);
app.use("/api/campaigns", campaignRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/ai", aiRoutes)

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});