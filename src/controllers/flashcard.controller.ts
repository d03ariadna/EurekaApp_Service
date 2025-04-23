import { Request, Response } from "express";
import { Flashcard } from "../models/Flashcard";

//Create Flashcard
export const createFlashcard = async (req: Request, res: Response) => {
    try {
        const { question, answer, categoryId } = req.body;
        const flashcard = await Flashcard.create({ question, answer, categoryId });
        res.status(201).json(flashcard);
    }catch (error) {
        res.status(500).json({ error: "Error creating flashcard: " + error });
    }
}

export const getFlashcards = async (req: Request, res: Response) => {
    try {
        const flashcards = await Flashcard.find();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: "Error fetching flashcards: " + error });
    }
}

export const getFlashcardsByCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const flashcards = await Flashcard.find({ categoryId });
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: "Error fetching flashcards: " + error });
    }
}

export const getFlashcardById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const flashcard = await Flashcard.findById(id);
        if (!flashcard) return res.status(404).json({ error: "No encontrada" });
        res.json(flashcard);
    } catch (error) {
        res.status(500).json({ error: "Error fetching flashcard: " + error });
    }
};
  