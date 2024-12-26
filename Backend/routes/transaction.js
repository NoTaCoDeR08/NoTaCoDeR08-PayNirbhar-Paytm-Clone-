const express = require("express");
const { getTransactions, createTransaction } = require("../controllers/transactionController");

const router = express.Router();

// Get All Transactions
router.get("/", getTransactions);

// Create a Transaction
router.post("/", createTransaction);

module.exports = router;
