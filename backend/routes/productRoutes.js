const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


// Get all products
router.get('/products', productController.getAllProducts);

// Get a specific product by ID
router.get('/products/:id', productController.getProdictById);

// Create a new product
router.post('/products', productController.createProduct);

// Update a product by ID
router.patch('/products/:id', productController.updateProductById);

// Delete a product by ID
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
