import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPrompt = () => {
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the Register component
  };

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Ready to Join Us?</h2>
      <p className="lead mb-4">
        Register today to start experiencing the benefits of our Fraud Detection Web App!
      </p>
      <button
        onClick={handleRegisterClick}
        className="btn btn-primary btn-lg"
        style={{ padding: '10px 30px', borderRadius: '25px' }}
      >
        Register Here Now!
      </button>
    </div>
  );
};

export default RegisterPrompt;
