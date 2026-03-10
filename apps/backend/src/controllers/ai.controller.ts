import { Request, Response } from "express"
import { generatePostIdea } from "../services/ai.service"

export async function generatePostHandler(req: Request, res: Response) {
  try {
    const { campaignName, platform } = req.body

    const result = await generatePostIdea({
      campaignName,
      platform,
    })

    res.json(result)
  } catch (error) {
    res.status(500).json({ error: "Failed to generate post" })
  }
}