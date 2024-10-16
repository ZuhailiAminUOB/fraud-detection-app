import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; // Make sure to create this file for styles
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'; // Import your Login component
import Footer from './components/Footer';
import RegCard from './components/RegCard';
import NewTrans from './components/NewTrans';
import Summary from './components/Summary';
import AboutUs from './components/AboutUs';
import Methodology from './components/Methodology';

import { Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap

function App() {
  const [username, setUsername] = useState(''); // State to store username
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Changed to boolean for clarity
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (user) => {
    setUsername(user); // Set the username
    setIsLoggedIn(true); // Set user as logged in
    setAlertMessage('User Logged In');
    setAlertType('success');
    setShowAlert(true);
    
    // Automatically hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleLogout = () => {
    setUsername(''); // Clear the username
    setIsLoggedIn(false); // Set user as logged out
    setAlertMessage('User Logged Out');
    setAlertType('danger');
    setShowAlert(true);
    
    // Automatically hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} username={username} toggleLogin={handleLogout} /> {/* Pass username here */}
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
            <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass the handleLogin function */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/methodology" element={<Methodology />} />
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
