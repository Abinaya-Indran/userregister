const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productName: { type: String, required: true }, // Name of the product
  quantity: { type: Number, required: true },   // Quantity of the product ordered
  totalPrice: { type: Number, required: true }, // Total price of the order
  orderDate: { type: Date, default: Date.now }, // Default to the current date
});

module.exports = mongoose.model("Order", orderSchema);
