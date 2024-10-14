import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTree } from 'react-icons/fa';

const RandomForestDescription = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Random Forest Classification</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <FaTree size={40} className="text-success me-3" />
                <h5 className="font-weight-bold">What is Random Forest?</h5>
              </div>
              <p>
                Random Forest is an ensemble learning method used for classification and regression. It operates by constructing multiple decision trees during training and outputs the mode of their predictions. This approach helps in improving accuracy and controlling overfitting.
              </p>

              <div className="d-flex align-items-center mb-3">
                <FaTree size={40} className="text-success me-3" />
                <h5 className="font-weight-bold">How We Used It for Fraud Detection</h5>
              </div>
              <p>
                In our application, we leveraged Random Forest Classification to detect fraudulent activities. By training the model on a dataset of historical transactions labeled as fraudulent or legitimate, the algorithm learned the patterns associated with fraudulent behavior. When new transactions are processed, the model evaluates their characteristics and assigns a probability of being fraudulent, allowing us to take timely action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomForestDescription;
