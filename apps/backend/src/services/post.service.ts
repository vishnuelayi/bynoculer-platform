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

export async function getPosts(filters?: {
  brandId?: string
  campaignId?: string
}) {

  return prisma.post.findMany({

    where: {

      ...(filters?.campaignId && {
        campaignId: filters.campaignId
      }),

      ...(filters?.brandId && {
        campaign: {
          brandId: filters.brandId
        }
      })

    },

    orderBy: {
      scheduledAt: "asc"
    },

    include: {
      campaign: true
    }

  })

}