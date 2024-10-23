import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import DatasetSummary from './DatasetSummary';
import DatasetFeatures from './DatasetFeatures';
import CorrelationAnalysis from './CorrelationAnalysis';
import DataProcessing from './DataProcessing';
import MachineLearningModels from './MachineLearningModels';
import EvaluationMatrix from './EvaluationMatrix';
import Limitations from './Limitations';
import ProposedSolution from './ProposedSolution';
import ModelPerformance from './ModelPerformance';
import Architecture from './Architecture';

function Methodology() {
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
    <div className="container my-4">
      <DatasetSummary />
      <br></br>
      <DatasetFeatures />
      <br></br>
      <CorrelationAnalysis />
      <br></br>
      <DataProcessing />
      <br></br>
      <Architecture />
      <br></br>
      <MachineLearningModels />
      <br></br>
      <ModelPerformance />
      <br></br>
      <EvaluationMatrix />
      <br></br>
      <Limitations />
      <br></br>
      <ProposedSolution />

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
    </div >

    
  );
}

export default Methodology;
