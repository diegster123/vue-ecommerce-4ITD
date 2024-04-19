// routes/product.js

const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const User = require("../models/User");

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST /api/products
// @desc    Create a new product
// @access  Private (only accessible for admin users)
router.post("/", async (req, res) => {
	const { name, price, description } = req.body;

	try {
		// Check if the user is an admin (example logic)
		const isAdmin = req.user.isAdmin; // Assuming isAdmin is a boolean field in User model
		if (!isAdmin) {
			return res.status(401).json({ msg: "Unauthorized" });
		}

		// Create new product
		const product = new Product({
			name,
			price,
			description,
		});

		// Save product to database
		await product.save();

		res.json(product);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   PUT /api/products/:id
// @desc    Update an existing product
// @access  Private (only accessible for admin users)
router.put("/:id", async (req, res) => {
	const { name, price, description } = req.body;

	try {
		// Check if the user is an admin (example logic)
		const isAdmin = req.user.isAdmin; // Assuming isAdmin is a boolean field in User model
		if (!isAdmin) {
			return res.status(401).json({ msg: "Unauthorized" });
		}

		// Find product by ID and update it
		let product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({ msg: "Product not found" });
		}

		product.name = name || product.name;
		product.price = price || product.price;
		product.description = description || product.description;

		await product.save();

		res.json(product);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Private (only accessible for admin users)
router.delete("/:id", async (req, res) => {
	try {
		// Check if the user is an admin (example logic)
		const isAdmin = req.user.isAdmin; // Assuming isAdmin is a boolean field in User model
		if (!isAdmin) {
			return res.status(401).json({ msg: "Unauthorized" });
		}

		// Find product by ID and delete it
		let product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({ msg: "Product not found" });
		}

		await product.remove();

		res.json({ msg: "Product deleted" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});
module.exports = router;
