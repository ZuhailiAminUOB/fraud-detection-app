import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css'; // Make sure to create this file for styles
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import RegCard from './components/RegCard';
import NewTrans from './components/NewTrans';
import Summary from './components/Summary';
import AboutUs from './components/AboutUs';
import Methodology from './components/Methodology';

import { Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    const message = isLoggedIn ? 'User Logged Out' : 'User Logged In';
    setAlertMessage(message);
    setAlertType(isLoggedIn ? 'danger' : 'success');
    setShowAlert(true);
    
    // Automatically hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

        {/* Alert section */}
        {showAlert && (
          <Alert variant={alertType} className="m-3" onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}

        <main>
          <Routes>
            <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/register" element={<Register />} />

            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/methodology" element={<Methodology/>} />
            <Route path="/regcard" element={<RegCard />} />
            <Route path="/newtrans" element={<NewTrans />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
