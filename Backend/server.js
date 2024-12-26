const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit if the database connection fails
  });

// Crypto Example (for demonstration, can be removed)
const exampleEncryption = () => {
  const secret = "paynirbhar_secret_key"; // Replace with a stronger key in production
  const hash = crypto.createHmac("sha256", secret).update("Hello PayNirbhar!").digest("hex");
  console.log("🔒 Crypto Hash Example:", hash);
};
exampleEncryption();

// Routes
const authRoutes = require("./routes/auth"); // User authentication routes
const transactionRoutes = require("./routes/transactions"); // Transaction-related routes

app.use("/api/auth", authRoutes); // Authentication
app.use("/api/transactions", transactionRoutes); // Transactions

// Base Route
app.get("/", (req, res) => {
  res.send("Welcome to the PayNirbhar Backend API!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
