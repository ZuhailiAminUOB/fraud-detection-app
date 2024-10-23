import React from "react";

const ModelPerformance = () => {

    const getCellStyle = (value) => {
        const numericValue = parseInt(value.replace('%', ''));
        if (numericValue === 100) {
          return { color: 'green' }; // Green for 100%
        } else if (numericValue < 70) {
          return { color: 'red' }; // Red for values below 60%
        }
        return {}; // Default for other values
      };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Model Performance Comparison</h1>
      <p>Values are rounded off to the nearest whole number.</p>

      {/* Model Performance Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Model Comparison (Class Fraud)</th>
            <th>Accuracy</th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1-score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Naïve Bayes</td>
            <td style={getCellStyle('89%')}>89%</td>
            <td style={getCellStyle('43%')}>43%</td>
            <td style={getCellStyle('96%')}>96%</td>
            <td style={getCellStyle('60%')}>60%</td>
          </tr>
          <tr>
            <td>Decision Tree (depth=4, leaves=15)</td>
            <td style={getCellStyle('99%')}>99%</td>
            <td style={getCellStyle('94%')}>94%</td>
            <td style={getCellStyle('99%')}>99%</td>
            <td style={getCellStyle('96%')}>96%</td>
          </tr>
          <tr>
            <td>RF (trees=5)</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('100%')}>100%</td>
          </tr>
          <tr>
            <td>Logistic Regression</td>
            <td style={getCellStyle('91%')}>91%</td>
            <td style={getCellStyle('50%')}>50%</td>
            <td style={getCellStyle('94%')}>94%</td>
            <td style={getCellStyle('65%')}>65%</td>
          </tr>
          <tr>
            <td>Neural Network 3 layers</td>
            <td style={getCellStyle('99%')}>99%</td>
            <td style={getCellStyle('86%')}>86%</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('92%')}>92%</td>
          </tr>
          <tr>
            <td>Neural Network 4 layers (model 30)</td>
            <td style={getCellStyle('98%')}>98%</td>
            <td style={getCellStyle('83%')}>83%</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('90%')}>90%</td>
          </tr>
          <tr>
            <td>Neural Network 4 layers (model 20)</td>
            <td style={getCellStyle('97%')}>97%</td>
            <td style={getCellStyle('74%')}>74%</td>
            <td style={getCellStyle('100%')}>100%</td>
            <td style={getCellStyle('85%')}>85%</td>
          </tr>
        </tbody>
      </table>

      {/* Metrics Explanation Table */}
      <h2 style={styles.subtitle}>Metrics Explanation</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Metric</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accuracy</td>
            <td>The overall accuracy of the model in successfully predicting fraud and non-fraud</td>
          </tr>
          <tr>
            <td>Precision</td>
            <td>When the model predicts a class (fraud/no-fraud), how correct the predictions are. How many false positives are there.</td>
          </tr>
          <tr>
            <td>Recall</td>
            <td>How good the model is at identifying a class (fraud/no-fraud).</td>
          </tr>
          <tr>
            <td>F1-score</td>
            <td>The harmonic average of precision and recall.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Styles for the component
const styles = {
    container: {
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    subtitle: {
      marginTop: '30px',
      marginBottom: '10px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      tableLayout: 'fixed', // Ensure fixed table layout to keep it compact
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      backgroundColor: '#f2f2f2',
      textAlign: 'center',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'center',
    }
  };

export default ModelPerformance;
