import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import DatasetSummary from './DatasetSummary';
import DatasetFeatures from './DatasetFeatures';
import CorrelationAnalysis from './CorrelationAnalysis';
import DataProcessing from './DataProcessing';
import MachineLearningModels from './MachineLearningModels';

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
      {/* <h2 className="mb-4">Our AI Methodology</h2> */ }
  {/* <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>1. Explanation of AI Methodology</h4>
        <p>
          We utilized the Random Forest algorithm, a powerful ensemble learning method that combines multiple decision trees to improve classification accuracy and control overfitting. 
          Each tree in the forest is built on a random subset of the training data, and when predicting outcomes, the Random Forest averages the predictions from all individual trees. 
          This approach allows for a more robust model that can handle complex relationships in the data while maintaining high accuracy.
        </p>
      </div> */}

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>2. Dataset We Used</h4>
        <p>
          We used the <strong>Credit Card Fraud dataset from Kaggle</strong>, which contains 1 million data records. 
          The dataset is heavily imbalanced, with the majority of records being legitimate and only a small percentage representing fraudulent cases. 
          It includes various features such as distance, amount, transaction type, and whether the transaction is an online order.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>3. Sampling the Dataset</h4>
        <p>
          To address the imbalance in the dataset, we performed sampling techniques to balance the number of fraudulent and legitimate cases. 
          This step ensures that our model is trained on a more representative set of data, improving its performance in real-world scenarios.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>4. Train/Test Split</h4>
        <p>
          We split the dataset into training and testing subsets to evaluate the model's performance accurately. 
          This separation allows us to train the model on one portion of the data and validate it on a separate set to avoid overfitting.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>5. Data Visualization</h4>
        <p>
          To understand the features affecting fraud detection better, we visualized fraud and non-fraud cases against various features. 
          Below is a dummy visualization:
        </p>
        <img src="https://via.placeholder.com/800x400" alt="Data Visualization" className="img-fluid mb-2" />
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>6. Data Scaling</h4>
        <p>
          We scaled the dataset to ensure that features with larger ranges do not disproportionately affect the model's training process. 
          Scaling improves the convergence of gradient descent algorithms used in model training.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>7. Correlation Analysis</h4>
        <p>
          We performed correlation analysis to identify relationships between features and their impact on fraud detection. 
          This analysis helped us select the most relevant features for our model.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>8. Model Training</h4>
        <p>
          We trained various machine learning models on the dataset, including Decision Trees, Random Forest, Logistic Regression, and Naive Bayes. 
          Each model was evaluated for its performance in detecting fraudulent transactions.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>9. Model Optimization</h4>
        <p>
          We optimized the machine learning models, focusing on parameters such as the depth of trees in the Random Forest algorithm to improve accuracy.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>10. Neural Networks</h4>
        <p>
          For our Neural Network models, we plotted accuracy and loss metrics to determine the optimal architecture. 
          These plots are crucial for evaluating the model's performance during training.
        </p>
        <img src="https://via.placeholder.com/800x400" alt="Neural Network Accuracy" className="img-fluid mb-2" />
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>11. Results Comparison</h4>
        <p>
          We compared the results of all trained models using confusion matrices, which provide insights into the true positive, false positive, true negative, and false negative rates for each model.
        </p>
        <img src="https://via.placeholder.com/800x400" alt="Confusion Matrix" className="img-fluid mb-2" />
      </div>

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
