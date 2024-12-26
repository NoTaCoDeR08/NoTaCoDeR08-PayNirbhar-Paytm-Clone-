import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <header>
        <h1>PayNirbhar</h1>
      </header>

      <section className="form-container">
        <h2>Create a New Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </section>

      <footer>
        <p>&copy; 2024 PayNirbhar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;

