const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControllers");

// CRUD routes for Product
router.post("/products", productController.createProduct); // Create product
router.get("/products", productController.getAllProducts); // Get all products
router.get("/products/:id", productController.getProductById); // Get product by ID
router.put("/products/:id", productController.updateProductById); // Update product by ID
router.delete("/products/:id", productController.deleteProductById); // Delete product by ID

module.exports = router;
