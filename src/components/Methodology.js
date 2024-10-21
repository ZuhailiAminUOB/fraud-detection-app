import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import DatasetSummary from './DatasetSummary';
import DatasetFeatures from './DatasetFeatures';
import CorrelationAnalysis from './CorrelationAnalysis';
import DataProcessing from './DataProcessing';
import MachineLearningModels from './MachineLearningModels';
import EvaluationMatrix from './EvaluationMatrix';
import Limitations from './Limitations';

function Methodology() {
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

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>Final Decision</h4>
        <p>
          Ultimately, we decided to utilize the Random Forest algorithm due to its impressive performance metrics, specifically high precision and recall in the confusion matrix, making it an ideal choice for fraud detection.
        </p>
      </div>
    </div >
  );
}

export default Methodology;
