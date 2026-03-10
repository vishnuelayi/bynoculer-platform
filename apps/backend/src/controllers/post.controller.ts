import { Request, Response } from "express"
import { createPost, getPostsByCampaign } from "../services/post.service"

export async function createPostHandler(req: Request, res: Response) {
  try {
    const { content, platform, campaignId, scheduledAt } = req.body

    const post = await createPost({
      content,
      platform,
      campaignId,
      scheduledAt,
    })

    res.json(post)
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" })
  }
}

export async function getPostsHandler(req: Request, res: Response) {
  try {
    const { campaignId } = req.query

    if (!campaignId) {
      return res.status(400).json({ error: "campaignId is required" })
    }

    const posts = await getPostsByCampaign(String(campaignId))

    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" })
  }
}