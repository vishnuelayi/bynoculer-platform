import { Router } from "express"
import {
  createCampaignHandler,
  getCampaignsHandler,
} from "../controllers/campaign.controller"

const router = Router()

router.post("/", createCampaignHandler)
router.get("/", getCampaignsHandler)

export default router