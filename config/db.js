import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables.");
        }

        await mongoose.connect(process.env.MONGODB_URI); // ✅ Remove deprecated options

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process if connection fails
    }
};
