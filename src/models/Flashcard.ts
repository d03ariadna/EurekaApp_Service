import { Schema, model } from "mongoose";
import { IFlashCard } from "../interfaces/models";

const flashCardSchema = new Schema<IFlashCard>(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
        categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    },
    { timestamps: true }
);

export const Flashcard = model<IFlashCard>("FlashCard", flashCardSchema);

