import { Router } from "express";
import { createFlashcard, getFlashcardById, getFlashcards, getFlashcardsByCategory } from "../controllers/flashcard.controller";

const router = Router();

router.get('/', getFlashcards);
router.post('/', createFlashcard);
router.get('/:id', getFlashcardById as any);
router.get('/category/:categoryId', getFlashcardsByCategory);

export default router;