import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createCampaign(data: {
  name: string
  brandId: string
}) {
  return prisma.campaign.create({
    data: {
      name: data.name,
      brandId: data.brandId,
    },
  })
}

export async function getCampaignsByBrand(brandId: string) {
  return prisma.campaign.findMany({
    where: {
      brandId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}