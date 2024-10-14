import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/uob_logo_bluebg.png';
import { Link } from 'react-router-dom';

function Navbar() {
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
          <Link to="/login">
          <button className="btn btn-outline-light ms-2" type="button">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-outline-light ms-2" type="button">Register</button>
          </Link>
          <Link to="/transaction">
            <button className="btn btn-outline-light ms-2" type="button">Transaction</button>
          </Link>
          <Link to="/flaskform">
            <button className="btn btn-outline-light ms-2" type="button">Test Form</button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

