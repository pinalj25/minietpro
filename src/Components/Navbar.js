import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaHome, FaUser, FaEnvelope, FaQuestionCircle, FaCogs, FaLock, FaSignOutAlt } from 'react-icons/fa';

import './Navbar.css';

export default function Navbar() {
  const { users, logout } = useAuth();
  const navigate = useNavigate();
  const [isNavigationActive, setNavigationActive] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleToggle = () => {
    setNavigationActive(!isNavigationActive);
  };

  return (
    <>
      

      <div className={`navigation ${isNavigationActive ? 'active' : ''}`}>
        <ul>
          <li>
            <div>
              {users ? (
                <span className="welcome-text">Welcome, {users.firstName} {users.lastName} !!</span>
              ) : (
                <span className="login-text">Please log in</span>
              )}
            </div>
          </li>
          
          <li className="nav-links">
            <NavLink to="/">
              <span className="icon"><FaApple /></span>
              <span className="title">Expense Mate</span>
            </NavLink>
            <NavLink to="/">
              <span className="icon"><FaHome /></span>
              <span className="title">Dashboard</span>
            </NavLink>
            <NavLink to="/et">
              <span className="icon"><FaUser /></span>
              <span className="title">Tracker</span>
            </NavLink>
            <NavLink to="/">
              <span className="icon"><FaEnvelope /></span>
              <span className="title">Notes</span>
            </NavLink>
            
            <NavLink to="/">
              <span className="icon"><FaCogs /></span>
              <span className="title">History</span>
            </NavLink>
            <NavLink to="/">
              <span className="icon"><FaLock /></span>
              <span className="title">Password</span>
            </NavLink>
            <NavLink to="/">
              <span className="icon"><FaSignOutAlt /></span>
              <span className="title" onClick={handleLogout}>Sign Out</span>
            </NavLink>
          </li>
        </ul>
        <div className="toggle" onClick={handleToggle}></div>
      </div>
    </>
  );
}
