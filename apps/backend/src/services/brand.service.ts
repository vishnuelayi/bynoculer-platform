import { prisma } from "./prisma.service";

export class BrandService {

  async createBrand(name: string, description?: string) {
    return prisma.brand.create({
      data: {
        name,
        description
      }
    });
  }

  async getBrands() {
    return prisma.brand.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }

}