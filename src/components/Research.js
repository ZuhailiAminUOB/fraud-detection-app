import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import article1 from '../images/article1.png';


function Research() {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Our Research Analysis</h2>
      
      <div style={{ backgroundColor: '#DDE9F7', padding: '10px'}}>
        <p style={{textAlign: 'justify'}}>
          <h5><b>Why is AI Fraud Detection System important?</b></h5>
          
          Traditional fraud detection methods are increasingly ineffective against the growing sophistication of fraudulent tactics. AI can analyze vast amounts of data in real-time, spot complex patterns, and quickly identify unusual activities that may indicate fraud. This helps prevent financial losses, enhances security, and provides a scalable solution for banks and businesses to protect customers and maintain trust in the financial system.
        </p>
      </div>

      <br></br>

      <div className="container my-4">

      {/* Problem & Context Section */}
      <div className="row mb-4">
        {/* Issue */}
        <div className="col-md-4">
          <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid' }}>
            <div style={{ fontSize: '40px', color: '#FF0000' }}>
              <i className="bi bi-exclamation-circle"></i>
            </div>
            <h4>Issue</h4>
            <p>
              Traditional fraud detection methods are increasingly ineffective against growing fraud tactics. Current systems can't always spot complex fraud patterns, leading to higher financial risks.
            </p>
          </div>
        </div>

        {/* Why Care */}
        <div className="col-md-4">
          <div className="border rounded p-3" style={{ borderColor: '#28A745', borderWidth: '2px', borderStyle: 'solid' }}>
            <div style={{ fontSize: '40px', color: '#28A745' }}>
              <i className="bi bi-heart-fill"></i>
            </div>
            <h4>Why Care</h4>
            <p>
              Fraud prevention is crucial to safeguard the financial security of individuals and organizations. By improving detection accuracy, we can reduce losses and maintain trust in the financial system.
            </p>
          </div>
        </div>

        {/* How Your Research Helps */}
        <div className="col-md-4">
          <div className="border rounded p-3" style={{ borderColor: '#17A2B8', borderWidth: '2px', borderStyle: 'solid' }}>
            <div style={{ fontSize: '40px', color: '#17A2B8' }}>
              <i className="bi bi-lightbulb-fill"></i>
            </div>
            <h4>How Our Research Helps</h4>
            <p>
              Our research leverages AI to provide a more accurate, scalable, and real-time solution for detecting fraud, helping businesses and financial institutions stay ahead of evolving threats and prevent financial losses.
            </p>
          </div>
        </div>
      </div>
    </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid' }}>
        <h3>About the Project</h3>
        <p style={{textAlign: 'justify'}}>
          In this section, we will share the key findings from our research on improving fraud detection using Artificial Intelligence (AI). This project focuses on how AI can be used to better identify and prevent fraud in financial transactions.
          <br></br>
          <br></br>
          Our research covers the following main areas:
          <br></br>
          <br></br>
          <ol style={{ paddingLeft: '20px', listStyleType: 'decimal', margin: 0}}>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}> <b>Project Purpose:</b> The goal of this project is to develop an AI-based system that can quickly and accurately detect fraud. This system will help reduce financial loss and increase security for businesses and customers. </li>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Problem Statement:</b> Fraud tactics are becoming more sophisticated, and traditional methods are no longer effective. This project aims to find a better solution by using AI to detect fraudulent activities more efficiently.</li>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Technical Solution:</b> We used machine learning algorithms to analyze patterns in financial transactions and spot unusual behavior that could indicate fraud. This section explains the tools and methods we used to build this system and how it works.</li>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Stakeholder Impact:</b> This project will benefit different groups, such as banks, businesses, and customers. By improving fraud detection, we can help financial institutions protect their customers and reduce risks.</li>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Conclusion:</b> In the conclusion, we summarize our findings and suggest next steps for improving the system. We also discuss how the system can be used in the real world and how it could be further developed.</li>
      </ol>
        </p>
            
       
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h3>Project Purpose </h3>
        <p style={{textAlign: 'justify'}}>
            {/* Icon here */}
        <div>
            <i className="bi-check" style={{ fontSize: '40px' }}></i>
        </div> 
        {/* Text content */}
            <h6>Our Aim</h6>
          To design and implement a real-time fraud detection system using advanced AI to identify and prevent fraudulent banking activities.
           <br></br>
           <br></br>
           <i className="bi bi-binoculars" style={{ fontSize: '35px' }}></i>
            <h6>The Goal</h6>
                <ul>
          <li> To enhance detection through analysing transaction patterns across regions and adapting to local behaviors and threats. </li>
          <li>The system will continuously learn and update, offering a scalable solution to protect transactions, reduce losses, and improve banking security.</li>
                </ul>

        </p>
      </div>

      {/* ... your existing content before the table ... */}
      <br></br>
      <h3>Research Findings</h3>
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Articles</th>
              <th scope="col">Types of fraud</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img src={article1} alt="article 1" className="img-fluid mb-2" style={{ width: '100%', height: 'auto' }} />
              </td>
              <td>Identification of accounts with significant cash holdings</td>
              <td>
                Over 40 UOB bank accounts holding more than $210,000 were seized or blocked in a police investigation into individuals, aged 24 to 65, suspected of selling their banking credentials and ATM cards to scammers for commissions or fake investment profits. UOB identified and blocked 74 more accounts linked to money laundering, withholding an additional $195,000. Using data analytics and network detection, suspicious transactions and potential money mules were identified. The public is advised to download the ScamShield app and use two-factor authentication for added security.
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img src={article1} alt="article 2" className="img-fluid mb-2" style={{ width: '100%', height: 'auto' }} />
              </td>
              <td>{/* Replace with your second finding description */}</td>
            </tr>
            {/* Add more table rows for additional findings */}
          </tbody>
        </table>
      </div>

      {/* ... your existing content after the table ... */}


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
    </div>
  );
}

export default Research;
