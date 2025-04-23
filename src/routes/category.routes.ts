import { Router } from "express";
import { createCategory } from "../controllers/category.controller";

const router = Router();

router.get('/', createCategory);

export default router;