import { Router } from "express";
import { createPostHandler, getPostsHandler } from "../controllers/post.controller";

const router = Router();

router.post("/", createPostHandler);
router.get("/", getPostsHandler);

export default router;