require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
	.connect(MONGODB_URI, {})
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => console.error(err));
