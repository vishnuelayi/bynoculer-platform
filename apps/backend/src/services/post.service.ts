import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createPost(data: {
  content: string
  platform: string
  campaignId: string
  scheduledAt?: Date
}) {
  return prisma.post.create({
    data,
  })
}

export async function getPosts(campaignId?: string) {
    return prisma.post.findMany({
      where: campaignId ? { campaignId } : {},
      orderBy: {
        scheduledAt: "asc",
      },
    })
  }