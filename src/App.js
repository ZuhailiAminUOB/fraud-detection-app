import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this file exists for styles
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

  const navigate = useNavigate(); // Initialize the navigate function

  // On component mount, check if a user is already logged in
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setUsername(user); // Set the username
    setIsLoggedIn(true); // Set user as logged in
    localStorage.setItem('username', user); // Save username to local storage
    setAlertMessage('User Logged In');
    setAlertType('success');
    setShowAlert(true);

    // Automatically hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);

    // Redirect to homepage after login
    navigate('/home');
  };

  const handleLogout = () => {
    setUsername(''); // Clear the username
    setIsLoggedIn(false); // Set user as logged out
    localStorage.removeItem('username'); // Remove username from local storage
    setAlertMessage('User Logged Out');
    setAlertType('danger');
    setShowAlert(true);

    // Automatically hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);

    // Redirect to homepage after logout
    navigate('/home');
  };

  return (
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
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
