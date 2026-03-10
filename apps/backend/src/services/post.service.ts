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

export async function getPostsByCampaign(campaignId: string) {
  return prisma.post.findMany({
    where: {
      campaignId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}