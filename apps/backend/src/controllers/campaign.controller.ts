import { Request, Response } from "express"
import { createCampaign, getCampaignsByBrand } from "../services/campaign.service"

export async function createCampaignHandler(req: Request, res: Response) {
  try {
    const { name, brandId } = req.body

    const campaign = await createCampaign({
      name,
      brandId,
    })

    res.json(campaign)
  } catch (error) {
    res.status(500).json({ error: "Failed to create campaign" })
  }
}

export async function getCampaignsHandler(req: Request, res: Response) {
  try {
    const { brandId } = req.query

    if (!brandId) {
      return res.status(400).json({ error: "brandId is required" })
    }

    const campaigns = await getCampaignsByBrand(String(brandId))

    res.json(campaigns)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch campaigns" })
  }
}