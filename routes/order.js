import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Place order
router.post("/place", async (req, res) => {
  try {
    const { userId, items, totalPrice } = req.body;

    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    const newOrder = new Order({ userId, items, totalPrice });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
