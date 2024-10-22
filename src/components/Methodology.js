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
      <MachineLearningModels />
      <br></br>
      <EvaluationMatrix />
      <br></br>
      <Limitations />
      <br></br>
      <ProposedSolution />
    </div >
  );
}

export default Methodology;
