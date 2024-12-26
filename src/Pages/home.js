import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>PayNirbhar</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Your Trusted Digital Wallet</h2>
        <p>Seamless, secure transactions at your fingertips.</p>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </section>

      <footer>
        <p>&copy; 2024 PayNirbhar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
