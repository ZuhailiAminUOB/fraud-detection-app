import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'leaflet/dist/leaflet.css';

function Summary() {
  const [transactions, setTransactions] = useState([]);
  const [mapUrl, setMapUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/summary')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .then(console.log(transactions))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const loadMap = () => {
    setLoading(true); // Set loading to true when the button is clicked
    fetch('http://localhost:5000/get_map')
      .then(response => response.json())
      .then(data => {
        if (data.map_url) {
          setMapUrl(data.map_url);
        }
      })
      .catch(error => console.error('Error fetching map:', error))
      .finally(() => {
        setLoading(false); // Reset loading state after fetching
      });
  };

  return (
    <div className="container my-4">
      <h2>View A Summary of All Your Transactions</h2>
      <p>View your past transaction history and plot your transactions on a map for better visualization and tracking of your spending patterns.</p>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Customer Home Location</th>
            <th>Transaction Amount</th>
            <th>Chip Used</th>
            <th>Pin Used</th>
            <th>Online Order</th>
            <th>Seller Location</th>
            <th>Distance from Home</th>
            <th>Distance from Last Transaction</th>
            <th>Repeat Retailer</th>
            <th>Ratio to Median Spendings</th>
            <th>Prediction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.customer_name}</td>
              <td>{transaction.cust_home_location}</td>
              <td>${transaction.transaction_amount.toFixed(2)}</td>
              <td>{transaction.used_chip ? 'Yes' : 'No'}</td>
              <td>{transaction.used_pin ? 'Yes' : 'No'}</td>
              <td>{transaction.online_order ? 'Yes' : 'No'}</td>
              <td>{transaction.location}</td>
              <td>{transaction.distance_from_home.toFixed(2)} km</td>
              <td>{transaction.distance_from_last_transaction.toFixed(2)} km</td>
              <td>{transaction.repeat_retailer ? 'Yes' : 'No'}</td>
              <td>{transaction.ratio_to_median_spendings.toFixed(2)}</td>
              <td>{transaction.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div><button className="btn btn-primary mb-3" onClick={loadMap} >
        Load Map
      </button></div>

      <div><h3>Transaction Map</h3></div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', marginTop: '50px'}}>
        <div style={{ height: '410px', border: '2px solid #000', marginTop: '20px', width: '62%', justifyContent: 'center' }}>
          {loading ? ( // Conditionally render loading message
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <p>Loading Map Visualization...</p> {/* Replace with your loading animation if desired */}
            </div>
          ) : (
            mapUrl && (
              <iframe
                src={`http://localhost:5000${mapUrl}`} // Ensure this points to your map
                width="100%"
                height="100%"
                style={{ border: 'none',
                  borderRadius: '4px',
                  position: 'relative',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                 }}
                title="Transaction Map"
              />
            )
          )}
        </div>
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
