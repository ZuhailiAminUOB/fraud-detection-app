import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carousel from './Carousel';
import TechStack from './TechStack';
import RandomForestDescription from './RandomForestDescription';
import RegisterPrompt from './RegisterPrompt';

function Home({ isLoggedIn }) {
  const [buttonText, setButtonText] = useState("↑ Scroll Up");

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    setButtonText("Scrolling..."); // Change button text immediately when clicked
    
    // Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });

    // After 1 second, reset the button text
    setTimeout(() => {
      setButtonText("↑ Scroll Up"); // Reset text back to default after scrolling
    }, 1000);
  };

  return (
    <div>
      {/* Carousel Outside the Container for Full Width */}
      <Carousel />

      <div className="container mt-4">
        {/* Conditionally render based on login status */}
        {isLoggedIn ? (
          <div>
            <h2 className="text-center mt-4 mb-4">Welcome, user!</h2>

            {/* Stacked Cards for Logged-in Users */}
            <div className="row">
              {/* Card 1: Register A New Card */}
              <div className="col-md-12 mb-4">
                <div className="card border border-dark">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.5rem' }}>Register A New Card</h5>
                    <p className="card-text" style={{ fontSize: '1.2rem' }}>
                      Register a new card here to detect fraud on any of your transactions. 
                      Ensure you provide accurate information for better fraud detection.
                    </p>
                    <a href="/regcard" className="btn btn-primary">Register New Card</a>
                  </div>
                </div>
              </div>

              {/* Card 2: Submit A New Transaction */}
              <div className="col-md-12 mb-4">
                <div className="card border border-dark">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.5rem' }}>Add A New Transaction</h5>
                    <p className="card-text" style={{ fontSize: '1.2rem' }}>
                      Fill in a form to the best of your knowledge to detect whether that 
                      particular transaction is potentially fraudulent. Your input is crucial for analysis.
                    </p>
                    <a href="/newtrans" className="btn btn-primary">Add New Transaction</a>
                  </div>
                </div>
              </div>

              {/* Card 3: View A Summary of All Your Transactions */}
              <div className="col-md-12 mb-4">
                <div className="card border border-dark">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.5rem' }}>View A Summary of All Your Transactions</h5>
                    <p className="card-text" style={{ fontSize: '1.2rem' }}>
                      View your past transaction history and plot your transactions on a map 
                      for better visualization and tracking of your spending patterns.
                    </p>
                    <a href="/summary" className="btn btn-primary">Go to Summary</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <RegisterPrompt />
        )}

        {/* Show TechStack and RandomForestDescription only when the user is not logged in */}
        {!isLoggedIn && (
          <>
            <TechStack />
          </>
        )}

        {/* Scroll to Top Button with dynamic text */}
        <button
            className="btn btn-secondary mt-4"
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',  // Place it at the bottom (behind the footer)
              right: '20px',   // Align it to the right
              color: 'white',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '1rem',
              zIndex: '900',  // Ensure it's behind the footer
              width: 'auto',  // Keep button small
              display: 'inline-block',
              whiteSpace: 'nowrap',
              backgroundColor: '#6c757d',
              opacity: 0.8,  // Slight transparency to ensure visibility
            }}
          >
            {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Home;
