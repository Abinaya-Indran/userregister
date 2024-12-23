const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

// CRUD routes for Orders
router.post("/orders", orderController.createOrder); // Create order
router.get("/orders", orderController.getAllOrders); // Get all orders
router.get("/orders/:id", orderController.getOrderById); // Get order by ID
router.put("/orders/:id", orderController.updateOrderById); // Update order by ID
router.delete("/orders/:id", orderController.deleteOrderById); // Delete order by ID

module.exports = router;
