import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("DB Connected successfully"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
