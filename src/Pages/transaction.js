import React from 'react';
import './Transaction.css';

const Transaction = () => {
  return (
    <div className="transaction-container">
      <header>
        <h1>PayNirbhar</h1>
      </header>

      <section className="transaction-details">
        <h2>Recent Transactions</h2>
        <div className="transaction-card">
          <p><strong>Sender:</strong> John Doe</p>
          <p><strong>Amount:</strong> $500</p>
          <p><strong>Status:</strong> Completed</p>
        </div>
        <div className="transaction-card">
          <p><strong>Sender:</strong> Jane Smith</p>
          <p><strong>Amount:</strong> $200</p>
          <p><strong>Status:</strong> Pending</p>
        </div>
        {/* Add more transaction cards as needed */}
      </section>

      <footer>
        <p>&copy; 2024 PayNirbhar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Transaction;
