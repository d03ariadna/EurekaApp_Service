import { Document, Types } from "mongoose";


export interface IFlashCard extends Document {
    question: string;
    answer: string;
    categoryId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategory extends Document {
    name: string;
}