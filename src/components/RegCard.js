import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegCard() {
  const [transactions, setTransactions] = useState([
    { name: '', homeState: '', annualIncome: '' },
  ]);

  const handleChange = (index, event) => {
    const newTransactions = [...transactions];
    newTransactions[index][event.target.name] = event.target.value;
    setTransactions(newTransactions);
  };

  const handleAddTransaction = () => {
    setTransactions([...transactions, { name: '', homeState: '', annualIncome: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:5000/regcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactions[0]), // Sending only the first transaction for now
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error('Error:', data.error);
      } else {
        console.log('Success:', data.message);
        alert('Card registered successfully!');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container mt-4">
      <h2>Register A New Card</h2>
      <p>
        Register a new card here to detect fraud on any of your transactions. Ensure you provide
        accurate information for better fraud detection.
      </p>
      <form onSubmit={handleSubmit}>
        {transactions.map((transaction, index) => (
          <div key={index} className="border rounded p-4 mb-4">
            <h5>Transaction {index + 1}</h5>
            <div className="mb-3">
              <label className="form-label">Name of User:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={transaction.name}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Home Address (State):</label>
              <select
                className="form-select"
                name="homeState"
                value={transaction.homeState}
                onChange={(event) => handleChange(index, event)}
                required
              >
                <option value="">Select your state</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
                <option value="Illinois">Illinois</option>
                <option value="Ngee Ann Polytechnic">Ngee Ann Polytechnic</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Annual Income:</label>
              <input
                type="number"
                className="form-control"
                name="annualIncome"
                value={transaction.annualIncome}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </div>
          </div>
        ))}
        <div className="mb-3">
          <button type="button" className="btn btn-primary me-3" onClick={handleAddTransaction}>
            Add a New Transaction
          </button>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegCard;
