import { Router } from "express";
import { createBrand, getBrands } from "../controllers/brand.controller";

const router = Router();

router.post("/brands", createBrand);
router.get("/brands", getBrands);

export default router;