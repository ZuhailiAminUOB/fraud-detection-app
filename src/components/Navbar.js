import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/uob_logo_bluebg.png';

function Navbar({ isLoggedIn, toggleLogin }) {
  return (
    <nav className="navbar border-bottom border-dark border-3" style={{ backgroundColor: '#133274' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="UOB" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
        </a>
        <span className="navbar-brand text-light">
          UOB Fraud Detection Web Application
        </span>

        <form className="d-flex" role="search">
          {/* Conditional rendering based on login status */}
          {isLoggedIn ? (
            // Show only the Log Out button when logged in
            <button
              className="btn btn-outline-light ms-2"
              type="button"
              onClick={toggleLogin}
            >
              Log Out
            </button>
          ) : (
            // Show Log In and Register buttons when logged out
            <>
              <button
                className="btn btn-outline-light ms-2"
                type="button"
                onClick={toggleLogin}  // Simulate logging in
              >
                Log In
              </button>
              <a href="/register">
                <button className="btn btn-outline-light ms-2" type="button">Register</button>
              </a>
            </>
          )}
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
