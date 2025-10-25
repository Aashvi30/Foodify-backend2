import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // ID of logged-in user
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
