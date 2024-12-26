const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  const { sender, receiver, amount } = req.body;

  try {
    const newTransaction = new Transaction({ sender, receiver, amount });
    await newTransaction.save();
    res.status(201).json({ message: "Transaction created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
