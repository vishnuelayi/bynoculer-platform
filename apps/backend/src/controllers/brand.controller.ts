import { Request, Response } from "express";
import { BrandService } from "../services/brand.service";

const brandService = new BrandService();

export const createBrand = async (req: Request, res: Response) => {
  try {

    const { name, description } = req.body;

    const brand = await brandService.createBrand(name, description);

    res.status(201).json(brand);

  } catch (error) {
    res.status(500).json({ error: "Failed to create brand" });
  }
};

export const getBrands = async (req: Request, res: Response) => {
  try {

    const brands = await brandService.getBrands();

    res.json(brands);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
};