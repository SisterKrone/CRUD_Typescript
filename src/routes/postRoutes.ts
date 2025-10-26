import { Router } from "express";
import { createPost, deletePost, getPost, updatePost } from "../controllers/postController";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;