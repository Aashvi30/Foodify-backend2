import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // waits up to 10s for MongoDB server
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1); // Stop server if DB is not connected
  }
};

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
