import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/uob_logo_bluebg.png';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, toggleLogin }) {
  return (
    <nav className="navbar border-bottom border-dark border-3" style={{ backgroundColor: '#133274' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="UOB" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
        </Link>
        <Link className="navbar-brand text-light" to="/">
          UOB Fraud Detection Web Application
        </Link>
        <form className="d-flex" role="search">
          {!isLoggedIn ? (
            <>
              <button className="btn btn-outline-light ms-2" type="button" onClick={toggleLogin}>
                Log In
              </button>
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
    </nav>
  );
}

export default Navbar;
