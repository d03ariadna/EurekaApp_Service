import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/models";

const categorySchema = new Schema<ICategory>(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
);

export const Category = model<ICategory>("Category", categorySchema);

