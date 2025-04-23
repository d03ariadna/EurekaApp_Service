import app from './app';
import mongoose, { mongo } from 'mongoose';

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI as string)
.then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} 🚀`);
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
});

