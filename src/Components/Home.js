import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { useAuth } from './AuthContext';

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleGetStarted = () => {
    isLoggedIn ? navigate('/et') : navigate('/login');
  };

  return (
    <>
      <div className="home-page">
        <header>
          <h1>Expense Tracker</h1>
          <p>Take control of your finances with our intuitive expense tracking app.</p>
        </header>
        <section className="features">
          <div className="feature">
            <h2>Track Expenses</h2>
            <p>Record and categorize your expenses effortlessly.</p>
          </div>
          <div className="feature">
            <h2>Set Budgets</h2>
            <p>Create budgets for different categories to manage your spending.</p>
          </div>
         
        </section>
        <section className="call-to-action">
          <p>Ready to take control of your finances?</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </section>
      </div>
    </>
  );
}
