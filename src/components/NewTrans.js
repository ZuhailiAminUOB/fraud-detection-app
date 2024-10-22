import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function NewTrans() {
  const [transactionData, setTransactionData] = useState({
    customerName: '',
    sellerLocation: '',
    transactionAmount: '',
    chipOrPin: '',
    onlineOrder: '',
  });

  const handleChange = (e) => {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent in the request
    const data = {
      name: transactionData.customerName,
      sellerLocation: transactionData.sellerLocation,
      amount: transactionData.transactionAmount,
      chipOrPin: transactionData.chipOrPin,
      onlineOrder: transactionData.onlineOrder,
    };

    try {
      // Make a POST request to the Flask backend
      const response = await fetch('http://localhost:5000/add_transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Transaction data submitted successfully:', result);
      } else {
        console.error('Failed to submit transaction data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting transaction data:', error);
    }

    // Reset the form
    setTransactionData({
      customerName: '',
      sellerLocation: '',
      transactionAmount: '',
      chipOrPin: '',
      onlineOrder: '',
    });
  };

  return (
    <div className="container my-4">
      <h2>Add A New Transaction</h2>
      <p>Fill in a form to the best of your knowledge to detect whether that particular transaction is potentially fraudulent. Your input is crucial for analysis.</p>
      
      <form onSubmit={handleSubmit} className="border border-4 border-dark p-4 mb-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={transactionData.customerName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Seller Location:</label>
          <select
            name="sellerLocation"
            value={transactionData.sellerLocation}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select a location</option>
            <option value="VivoCity">VivoCity</option>
            <option value="Orchard Central">Orchard Central</option>
            <option value="Bugis Junction">Bugis Junction</option>
            <option value="Marina Bay Sands">Marina Bay Sands</option>
            <option value="Ion Orchard">Ion Orchard</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Las Vegas">Las Vegas</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Transaction Amount:</label>
          <input
            type="number"
            name="transactionAmount"
            value={transactionData.transactionAmount}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Chip or Pin:</label>
          <select
            name="chipOrPin"
            value={transactionData.chipOrPin}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select an option</option>
            <option value="Chip">Chip</option>
            <option value="Pin">Pin</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Online Order:</label>
          <select
            name="onlineOrder"
            value={transactionData.onlineOrder}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary me-3">
          Submit Transaction Details
        </button>
        <Link to="/summary">
          <button type="button" className="btn btn-secondary">
            View Transaction Summary
          </button>
        </Link>
      </form>
    </div>
  );
}

export default NewTrans;
