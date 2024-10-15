import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import article1 from '../images/article1.png';
import article2 from '../images/article2.png';
import article3 from '../images/article3.png';
import article4 from '../images/article4.png';
import research from '../images/researchmethod.jpg';

function Research() {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Our Research Analysis</h2>

      <img src={research} alt="Research image from google" className="img-fluid mb-5" />

      
      <div style={{ backgroundColor: '#DDE9F7', padding: '15px'}}>
        <p style={{textAlign: 'justify'}}>
          <h5><b>Why is AI Fraud Detection System important?</b></h5>
          
          Traditional fraud detection methods are increasingly ineffective against the growing sophistication of fraudulent tactics. AI can analyze vast amounts of data in real-time, spot complex patterns, and quickly identify unusual activities that may indicate fraud. This helps prevent financial losses, enhances security, and provides a scalable solution for banks and businesses to protect customers and maintain trust in the financial system.
        </p>
      </div>

      <div className="container my-4">

  {/* Problem & Context Section */}
  <div className="row mb-4">
    {/* Issue */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div style={{ fontSize: '40px', color: '#FF0000' }}>
            <i className="bi bi-exclamation-circle"></i>
          </div>
          <h4>Issue</h4>
          <p>
            Traditional fraud detection methods are increasingly ineffective against growing fraud tactics. Current systems can't always spot complex fraud patterns, leading to higher financial risks.
          </p>
        </div>
      </div>
    </div>

    {/* Why Care */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div style={{ fontSize: '40px', color: '#28A745' }}>
            <i className="bi bi-heart-fill"></i>
          </div>
          <h4>Why Care</h4>
          <p>
            Fraud prevention is crucial to safeguard the financial security of individuals and organizations. By improving detection accuracy, we can reduce losses and maintain trust in the financial system.
          </p>
        </div>
      </div>
    </div>

    {/* How Your Research Helps */}
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
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
        <h3>Project Purpose</h3>
        <p style={{textAlign: 'left', padding: '10px'}}>
            {/* Icon here */}
        <div>
            <i className="bi-check" style={{ fontSize: '50px' }}></i>
        </div> 
        {/* Text content */}
            <h4>Our Aim</h4>
          To design and implement a real-time fraud detection system using advanced AI to identify and prevent fraudulent banking activities.
           <br></br>
           <br></br>
           <i className="bi bi-binoculars" style={{ fontSize: '35px' }}></i>
            <h4>The Goal</h4>
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
              <th scope="col">Summary of articles</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td style={{ width: '40%' }}>
                <img src={article1} alt="article 1" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
              </td>
              <td>Identification of accounts with significant cash holdings</td>
              <td>
                Over 40 UOB bank accounts holding more than $210,000 were seized or blocked in a police investigation into individuals, aged 24 to 65, suspected of selling their banking credentials and ATM cards to scammers for commissions or fake investment profits. UOB identified and blocked 74 more accounts linked to money laundering, withholding an additional $195,000. Using <b>data analytics</b> and <b>network detection</b>, suspicious transactions and potential money mules were identified. The public is advised to download the ScamShield app and use two-factor authentication for added security.
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>
                <img src={article2} alt="article 2" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
              </td>
              <td>Large transaction from potential scammed victims
              </td>
              <td>
                A 75-year-old woman was scammed out of over S$213,000 in investments and was on the verge of losing an additional $500,000 when a Standard Chartered relationship manager intervened. The bank officer noticed her unusual banking behavior and flagged the outgoing transfers to various accounts, preventing further financial loss.
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>
                <img src={article3} alt="article 3" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
              </td>
              <td>Large international transaction (potential fraud alert)
              </td>
              <td>
                
Over S$370,000 was recovered after Singapore and Hong Kong police, along with two banks, foiled a scam targeting a 70-year-old man. The victim had shared his bank credentials with a scammer, believing his computer was hacked. DBS detected suspicious transactions totaling S$180,000 sent to a Hong Kong account and immediately blocked further transfers, notifying Singapore's Anti-Scam Centre (ASC). The ASC contacted Hong Kong's Anti-Deception Coordination Centre (ADDC) and traced an additional S$240,000 missing from the victim's UOB account.
              </td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>
                <img src={article4} alt="article 4" className="img-fluid mb-2" style={{ width: '500px', height: 'auto' }} />
              </td>
              <td>Utilised corporate bank accounts for fraudulent activities
              </td>
              <td>
                
Three individuals were arrested for their suspected involvement in scam-related activities after a joint operation by police and DBS Bank. Over $1.28 million in bank accounts was seized. The trio allegedly gave their Singpass credentials to scammers for up to $2,000 per account, which were used to open fake businesses and bank accounts to facilitate scam-related transactions. Most victims had unknowingly handed over their Singpass details or clicked phishing links, often in response to fake job or loan offers, including ads on Telegram.
              </td>
            </tr>

            
            {/* Add more table rows for additional findings */}
          </tbody>
        </table>
      </div>

      {/* ... your existing content after the table ... */}


      <h1>Hence...</h1>
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid' }}>
        <h4>Problem Statement</h4>
        <p style={{textAlign: 'justify'}}>
          Traditional fraud detection systems struggle to handle the growing complexity of fraud, especially when it varies across regions. Many systems can't effectively analyze or adapt to local transaction patterns, causing delays in detecting fraud. This puts banks at higher risk of undetected fraud, resulting in financial losses and reduced customer trust.
          <br></br><br></br>
          A more adaptive, region-specific solution is needed to respond to local threats and evolving fraud tactics.

        </p>
      </div>

      <div style={{ borderColor: '#D1E0F3', borderWidth: '2px', borderRadius: '50px', borderStyle: 'solid', backgroundColor: '#E7EFF9' }}>
            <div style={{ fontSize: '50px', color: '#DAA600' }}>
              <i class="bi bi-key"></i>
            </div>
        <h4><strong>Key Features of Our System</strong></h4>
        
        <div className="container my-3">
              <div className="row mb-4">
                {/* Features */}
                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 1</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Distance from Home:</b>
                      <br></br>
                      Measures the distance beween the customer’s home and the location of the transaction
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 2</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Distance from Last Transaction:</b>
                      <br></br>
                      Calculates the distance between current transaction and the previous one
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 3</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Ratio to Median Purchase Price:</b>
                      <br></br>
                      Compares the transaction amount to the median purchase price of the customer’s past transactions
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 4</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Repeat Retailer:</b>
                      <br></br>
                      Indicates whether the transaction occurred with a retailer previously used by the customer
                      <br></br>
                      (0 = No, 1 = Yes).
                    </p>
                  </div>
                </div>
              </div>

          <div className="row mb-4 justify-content-center"> 

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                       
                    <h4>Feature 5</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Chip Utilization:</b>
                      <br></br>
                      Identifies if the transaction was completed using a chip-enabled credit card
                      (0 = No, 1 = Yes).
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 6</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>PIN Number Usage:</b>
                      <br></br>
                      Determines whether a PIN was used to complete the transaction
                      <br></br>
                      (0 = No, 1 = Yes).
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white' }}>
                    
                    <h4>Feature 7</h4>
                    <p style={{textAlign: 'justify'}}>
                      <b>Online Order:</b>
                      <br></br>
                      Specifies if the transaction was an online purchase
                      <br></br>
                      (0 = No, 1 = Yes).
                    </p>

                    
                  </div>
                </div>
              </div>
           </div>
           <br></br>
                    <p>
                      The system will then analyze these factors to determine if the transaction is categorized as <b>Fraud or No Fraud.</b>
                    </p>
          <br></br>
      </div>

<br></br>

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
