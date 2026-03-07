import { Request, Response } from "express";
import { HealthService } from "../services/health.service";

const healthService = new HealthService();

export const healthController = (req: Request, res: Response) => {
  const result = healthService.getStatus();
  res.json(result);
};