import { Router } from "express"
import { generatePostHandler } from "../controllers/ai.controller"

const router = Router()

router.post("/generate-post", generatePostHandler)

export default router