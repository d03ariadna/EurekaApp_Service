import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import flashcardRoutes from './routes/flashcard.routes';
import categoryRoutes from './routes/category.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello world! 🚀');
});

app.use('/flashcards', flashcardRoutes);
app.use('/category', categoryRoutes);

export default app;