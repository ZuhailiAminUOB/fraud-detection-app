import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Summary() {
  // Dummy transaction data for display
  const transactions = [
    {
      id: 1,
      customerName: 'John Doe',
      sellerLocation: 'VivoCity',
      transactionAmount: 150,
      chipOrPin: 'Chip',
      onlineOrder: 'Yes',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      sellerLocation: 'Orchard Central',
      transactionAmount: 200,
      chipOrPin: 'Pin',
      onlineOrder: 'No',
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      sellerLocation: 'Bugis Junction',
      transactionAmount: 350,
      chipOrPin: 'Chip',
      onlineOrder: 'Yes',
    },
    {
      id: 4,
      customerName: 'Sara Wilson',
      sellerLocation: 'The Shoppes at Marina Bay Sands',
      transactionAmount: 120,
      chipOrPin: 'Pin',
      onlineOrder: 'No',
    },
    {
      id: 5,
      customerName: 'Chris Lee',
      sellerLocation: 'Ion Orchard',
      transactionAmount: 80,
      chipOrPin: 'Chip',
      onlineOrder: 'Yes',
    },
  ];

  return (
    <div className="container my-4">
      <h2>View A Summary of All Your Transactions</h2>
      <p>View your past transaction history and plot your transactions on a map for better visualization and tracking of your spending patterns.</p>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Seller Location</th>
            <th>Transaction Amount</th>
            <th>Chip or Pin</th>
            <th>Online Order</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.sellerLocation}</td>
              <td>${transaction.transactionAmount}</td>
              <td>{transaction.chipOrPin}</td>
              <td>{transaction.onlineOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Transaction Map</h3>
      {/* Dummy Map */}
      <div className="map-container" style={{ height: '400px', border: '2px solid #000', marginTop: '20px' }}>
        <p style={{ textAlign: 'center', lineHeight: '400px' }}>[Dummy Map Here]</p>
        {/* You can replace this placeholder with an actual map component like Google Maps or Leaflet later */}
      </div>

      <div className="mt-4">
        <Link to="/newtrans">
          <button className="btn btn-primary">Add Another Transaction</button>
        </Link>
      </div>
    </div>
  );
}

export default Summary;
