import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});