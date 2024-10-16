import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/uob_logo_bluebg.png';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, username, toggleLogin }) {
  return (
    <nav className="navbar border-bottom border-dark border-3" style={{ backgroundColor: '#133274' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="UOB" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
        </Link>
        <div className="mx-auto">
          <Link className="navbar-brand text-light" to="/" style={{ fontSize: '1.5rem' }}>
            UOB Fraud Detection Web Application
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {/* Dynamic Greeting */}
          {isLoggedIn && (
            <span className="navbar-text text-light me-3" style={{ fontSize: '1.5rem' }} >Hello, {username}!</span>
          )}
          <form className="d-flex" role="search">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <button className="btn btn-outline-light ms-2" type="button">
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline-light ms-2" type="button">Register</button>
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-light ms-2" type="button" onClick={toggleLogin}>
                Log Out
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
