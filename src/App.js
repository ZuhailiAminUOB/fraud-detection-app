import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css'; // Make sure to create this file for styles
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
// import TransactionForm from './components/TransactionForm';
// import Dashboard from './components/Dashboard';
// import FraudParagraph from './components/FraudParagraph';
// import Register from './components/Register';
// import FlaskForm from './components/FlaskForm';
// import Login from './components/Login';
import Home from './components/Home'

function App() {
  const [transactionData, setTransactionData] = useState(null);
  const [fraudResult, setFraudResult] = useState(null);

  const handleFormSubmit = (data) => {
    // Simulate an AI model checking for fraud
    console.log('Transaction data submitted:', data);
    const isFraud = Math.random() > 0.5; // Randomly determine if the transaction is fraudulent
    setTransactionData(data);
    setFraudResult(isFraud ? 'Fraudulent' : 'Legitimate');
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/register" element={<Register onSubmit={handleFormSubmit} />} />
            <Route path ="/login" element={<Login onSubmit={handleFormSubmit} />} />
            <Route path="/transaction" element={
              <>
                <FraudParagraph/>
                <TransactionForm onSubmit={handleFormSubmit} />
                <Dashboard transactionData={transactionData} fraudResult={fraudResult} />
              </>
            } /> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="/flaskform" element={<FlaskForm onSubmit={handleFormSubmit}/>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
