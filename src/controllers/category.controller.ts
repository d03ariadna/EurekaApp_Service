import { Request, Response } from "express";
import { Category } from "../models/Category";

//Create Flashcard
export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    }catch (error) {
        res.status(500).json({ error: "Error creating category: " + error });
    }
}
  