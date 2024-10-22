import React from 'react';
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
