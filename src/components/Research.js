import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import article1 from '../images/article1.png';
import article2 from '../images/article2.png';
import article3 from '../images/article3.png';
import article4 from '../images/article4.png';
import research from '../images/researchmethod.jpg';
import stakeholders from '../images/stakeholders.png';
import stakeholderanalysis from '../images/stakeholderanalysis.png';
import racichart from '../images/racichart.png';

function Research() {
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
    
    <div className="container my-2">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">TDP Project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#projectpurpose">Project Purpose</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#researchfindings">Research Findings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#keyfeatures">Key Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stakeholders'-impact">Stakeholders' Impact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#riskanalysis">Risk Analysis</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </div>
      </nav>

      <br></br>

      <h2 className="mb-4">Our Research Analysis</h2>

      <img src={research} alt="Research image from google" className="img-fluid mb-5" />

      
      <div style={{ backgroundColor: '#DDE9F7', padding: '15px',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)'
      }}>
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

      <div className="border rounded p-3 mb-4" style={{ 
        borderColor: '#FF0000',
        borderWidth: '2px',
        borderStyle: 'solid',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
       }}>
        <h3>About the Project</h3>
        <p style={{textAlign: 'justify'}}>
          In this section, we will share the key findings from our research on improving fraud detection using Artificial Intelligence (AI). This project focuses on how AI can be used to better identify and prevent fraud in financial transactions.
          <br></br>
          <br></br>
          Our research covers the following main areas:
          <br></br>
          <br></br>
          <ol style={{ paddingLeft: '20px', listStyleType: 'decimal', margin: 0}}>
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}> <b>Project Purpose:</b> 
        <br></br>To determine what an AI fraud detection system can achieve or solve. </li>
        <br></br>
               
        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Problem Statement:</b>
        <br></br>
        Fraud techniques are evolving, making traditional methods less effective. This project seeks to improve detection by using AI for more efficient fraud identification.</li>
        <br></br>

        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Technical Solution:</b>
        <br></br>
        Comprehensive explanations can be found under "
          <a href="methodology" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
            Our AI Methodology
          </a>".
        </li>
        <br></br>

        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Stakeholders' Impact:</b>
        <br></br>
        This project benefits various groups, such as banks, businesses, and customers. By improving fraud detection, financial institutions can better protect their customers and reduce risks.</li>
        <br></br>

        <li style={{ listStylePosition: 'inside', marginBottom: '5px' }}><b>Conclusion:</b>
        <br></br>
        A summary of findings and suggestions for improving the system, along with a discussion on its real-world applications and future development.</li>
      </ol>
        </p>
            
       
      </div>

      <div id = "projectpurpose" className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)'
       }}>
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

      <div id ="researchfindings">
      <h3>Research Findings</h3>
        <p style={{ fontSize: '20px' }}>
          Click on the articles to read the full version.
        </p>
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)'
       }}>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>

               <th scope="col" style={{ position: 'relative', textAlign: 'center' }}>
                <span className="animated-arrow">▼</span>
                Articles
              </th>

              <th scope="col">Types of fraud</th>
              <th scope="col">Summary of articles</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td style={{ width: '40%' }}>
                <a href="https://www.straitstimes.com/singapore/more-than-110-suspicious-bank-accounts-with-over-400k-blocked-by-uob-or-seized-by-police" target="_blank" rel="noopener noreferrer">
                <img src={article1} alt="article 1" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
                </a>
              </td>
              <td>Identification of accounts with significant cash holdings</td>
              <td>
                Over 40 UOB bank accounts holding more than $210,000 were seized or blocked in a police investigation into individuals, aged 24 to 65, suspected of selling their banking credentials and ATM cards to scammers for commissions or fake investment profits. UOB identified and blocked 74 more accounts linked to money laundering, withholding an additional $195,000. Using <b>data analytics</b> and <b>network detection</b>, suspicious transactions and potential money mules were identified. The public is advised to download the ScamShield app and use two-factor authentication for added security.
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>
                <a href="https://www.straitstimes.com/singapore/woman-scammed-of-over-213k-would-have-lost-500k-more-without-police-bank-intervention" target="_blank" rel="noopener noreferrer">
                <img src={article2} alt="article 2" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
                </a>
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
                <a href="https://www.channelnewsasia.com/singapore/scam-police-singapore-hong-kong-uob-dbs-bank-technical-support-4305966" target="_blank" rel="noopener noreferrer">
                <img src={article3} alt="article 3" className="img-fluid mb-2" style={{ width: '200%', height: 'auto' }} />
                </a>
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
                <a href="https://www.straitstimes.com/singapore/3-arrested-bank-accounts-with-over-128m-seized-over-suspected-scam-related-activities" target="_blank" rel="noopener noreferrer">
                <img src={article4} alt="article 4" className="img-fluid mb-2" style={{ width: '500px', height: 'auto' }} />
                </a>
              </td>
              <td>Utilised corporate bank accounts for fraudulent activities
              </td>
              <td>
                
Three individuals were arrested for their suspected involvement in scam-related activities after a joint operation by police and DBS Bank. Over $1.28 million in bank accounts was seized. The trio allegedly gave their Singpass credentials to scammers for up to $2,000 per account, which were used to open fake businesses and bank accounts to facilitate scam-related transactions. Most victims had unknowingly handed over their Singpass details or clicked phishing links, often in response to fake job or loan offers, including ads on Telegram.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>




      <h1>Hence...</h1>
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#343a40', borderWidth: '2px', borderStyle: 'solid', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)', }}>
        <h4>Problem Statement</h4>
        <p style={{textAlign: 'justify'}}>
          Traditional fraud detection systems struggle to handle the growing complexity of fraud, especially when it varies across regions. Many systems can't effectively analyze or adapt to local transaction patterns, causing delays in detecting fraud. This puts banks at higher risk of undetected fraud, resulting in financial losses and reduced customer trust.
          </p>
         
        <p style={{ fontSize: '18px' }}>
          A more adaptive, region-specific solution is needed to respond to local threats and evolving fraud tactics.
        </p>
        
      </div>

      <div style={{ borderColor: '#D1E0F3', borderWidth: '2px', borderRadius: '50px', borderStyle: 'solid', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ fontSize: '50px', color: '#DAA600' }}>
              <i class="bi bi-key"></i>
            </div>
        <h4><strong>Key Features of Our System</strong></h4>
        
        <div className="container my-3">
              <div className="row mb-4">
                {/* Features */}
                <div className="col-md-3">
                  <div className="border rounded p-3" style={{ borderColor: '#FF0000', borderWidth: '2px', borderStyle: 'solid', backgroundColor: 'white', }}>
                    
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

      <div id = "stakeholders'-impact" style={{ borderColor: '#e4f2f7', borderWidth: '2px',
        borderStyle: 'solid',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',padding: '30px' }}>
          
      <h4>Stakeholders' Impact</h4>

        <p style={{textAlign: 'justify'}}>
          <b>Stakeholder:</b> Any individual, group, or party that has an interest in an organization and the outcomes of its actions.
        </p>
        
        <hr />

        <p style={{ fontSize: '25px' }}>
          Types of Stakeholders:
          <br></br>
          <img src={stakeholders} alt="types of stakeholders" className="img-fluid mb-2" style={{ width: '60%', height: 'auto' }} />
          <br></br>

          <hr style={{ 
          border: 'none', 
          borderTop: '1px solid black', 
          margin: '20px 0', 
          width: '100%' 
        }} />
        
          Stakeholder Analysis:
            <p style={{ fontSize: '15px' }}>
              The power/interest grid is a matrix used for categorising stakeholders during a change project to allow them to be effectively managed. 
              <br></br>
              Stakeholders are plotted on the grid in relation to the power and interest they have in respect of the project.
            </p>
              <img src={stakeholderanalysis} alt="stakeholder analysis" className="img-fluid mb-2" style={{ width: '60%', height: 'auto' }} />
              <br></br><br></br>

            <hr style={{ 
              border: 'none', 
              borderTop: '1px solid black', 
              margin: '20px 0', 
              width: '100%' 
            }} />

            RACI Chart (RAM):
            <p style={{ fontSize: '15px' }}>
              The RACI Chart, also known as a <b> Responsibility Assignment Matrix (RAM) </b>, provide various advantages to businesses, including: <b> Improved clarity in roles and responsibilities in a project.</b> This help set clear expectations for project roles and ensure effective role distribution. By specifying who is responsible, accountable, consulted, and informed for each task, they minimize confusion and overlap.
              <br></br><br></br>
              <p style={{ fontSize: '25px', textAlign:'justify' }}>
            Explanation of RACI Roles:
          </p>
            <p style ={{textAlign:'justify'}}>
              <ul>
                <li><b>Responsible (R):</b> The stakeholder(s) doing the work to complete the task. For example, Data Scientists/AI Engineers are responsible for model training and testing.</li>

                <li><b>Accountable (A):</b> The stakeholder(s) ultimately answerable for the task's success. This is usually the project owner or the business leader.</li>

                <li><b>Consulted (C):</b> These stakeholders provide input or advice and are consulted before decisions are made. For example, Regulators and Compliance Authorities are consulted for legal checks.</li>

                <li><b>Informed (I):</b> Stakeholders who need to be kept in the loop but do not directly contribute to the task. For example, Shareholders/Investors need to be informed about key developments but aren’t actively involved in day-to-day decisions.</li>

              </ul>
            </p>
              <img src={racichart} alt="raci chart" className="img-fluid mb-2" style={{ width: '100%', height: 'auto' }} />
            </p>          
           </p>

            <p style={{ fontSize: '25px', textAlign:'left' }}>
              Key Tasks:
            </p>

            <p style ={{textAlign:'justify'}}>
              <ol>
                <li><b>System Requirements Gathering:</b>  Includes understanding business needs, regulatory requirements, and technical specifications.
                </li>

                <li><b>Budget Approval:</b> Securing financial resources for the project.</li>

                <li><b>Vendor Selection/Procurement:</b> Choosing external solution providers for software or data. </li>

                <li><b>System Design and Development:</b> Architecting and building the AI system.</li>

                <li><b>Data Collection and Preprocessing:</b> Gathering and cleaning data for training AI models.</li>

                <li><b>Model Training and Testing:</b> Developing and testing the AI model for fraud detection.</li>

                <li><b>System Integration and Deployment:</b> Ensuring the AI system integrates with the company’s existing systems.</li>

                <li><b>Security Audits and Testing:</b> Ensuring the system is secure and resistant to cyber threats.</li>

                <li><b>Legal and Regulatory Compliance Checks:</b> Verifying that the system complies with legal requirements and industry regulations.</li>

                <li><b>System Go-Live/Launch:</b>Deploying the system into production.</li>

                <li><b>Post-launch Monitoring and Optimization:</b> Ongoing monitoring of system performance and making adjustments as necessary.</li>

                <li><b>Reporting and Documentation: </b>Documenting the system's processes, results, and key metrics for internal and external stakeholders.</li>
              </ol>

              This RACI chart provides a clear overview of the roles and responsibilities for each task within the AI fraud detection system project.
                  
              </p>
      </div>
      <br></br>


      {/* For Risk Analysis */}

      <div id="riskanalysis" style={{ borderColor: '#e4f2f7', borderWidth: '2px',
        borderStyle: 'solid',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 60%, rgba(178, 255, 255, 0.6) 100%)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)',
        padding: '30px' }}>
          
      <h4>Risk Identification, Analysis & Response</h4>
        
        <p style={{textAlign: 'justify'}}>
          Risk assessment helps <b>identify threats or weaknesses </b> that could affect the AI fraud detection system and its stakeholders. It then decides <b>how to address these risks and prioritizes</b> them based on their <b>likelihood </b>and <b>impact</b> on the business, considering the roles and interests of each stakeholder.
        </p>

        <br></br>

        <p style={{ fontSize: '25px', textAlign:'justify' }}>
          Explanation of Columns:
        </p>

        <p style ={{textAlign:'justify'}}>
          <ul>
            <li><b>Risk Events:</b> The potential threats or vulnerabilities that could impact the AI fraud detection system.</li>
            <li><b>Likelihood:</b> The probability of the risk occurring (Low, Medium, High).</li>          
            <li><b>Impact:</b> The potential consequence or severity of the risk on the project (Low, Medium, High).</li>
            <li>Severity: Overall risk level calculated from likelihood and impact.</li>
            <li><b>Response:</b> Actions that can be taken to mitigate, transfer, or accept the risk.</li>
          </ul>
        </p>

        <p style={{ fontSize: '25px', textAlign:'left' }}>
              <b>Risk Register:</b>
            </p>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">risk #</th>
              <th scope="col">Risk Events</th>
              <th scope="col">Likelihood/Probability</th>
              <th scope="col">Impact</th>
              <th scope="col">Severity</th>
              <th scope="col">Response</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
                <td>Regulatory Non-compliance</td>
                <td>Medium</td>
                <td>High</td>
                <td>High</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Regular audits and compliance checks.</li>
                    <li>Legal team to monitor regulatory changes.</li>
                    <li>Implement robust compliance tracking and reporting tools.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">2</th>
                <td>Inaccurate Fraud Detection (False Positives/Negatives)</td>
                <td>High</td>
                <td>High</td>
                <td>High</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Use balanced datasets for training.</li>
                    <li>Incorporate manual review options for flagged transactions.</li>
                    <li>Implement confidence thresholds and feedback loops.</li>
                  </ul>
                </td>
                
              
            </tr>

            <tr>
              <th scope="row">3</th>
                <td>Security Breaches (Data Breaches, Hacking)</td>
                <td>Low</td>
                <td>High</td>
                <td>High</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Implement multi-layered security controls (encryption, access control, network monitoring).</li>
                    <li>Regular penetration testing and vulnerability assessments.</li>
                    <li>Incident response plan.</li>
                  </ul>
                </td>
              
            </tr>

            <tr>
              <th scope="row">4</th>
                <td>Inadequate Budget/Financial Overruns</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Regularly track project expenses against budget.</li>
                    <li>Forecast potential cost overruns and build contingencies.</li>
                    <li>Prioritize key deliverables and features.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">5</th>
                <td>Vendor Delays in Deliverables</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Regular performance reviews and communication with vendors.</li>
                    <li>Have contingency plans and backup vendors in place.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">6</th>
                <td>Data Quality Issues (Missing or Biased Data)</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Implement robust data validation processes.</li>
                    <li>Perform regular audits of data sources.</li>
                    <li>Address biases in the training data using diverse and representative datasets.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">7</th>
                <td>Operational Disruption During Integration</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Conduct thorough testing before integration.</li>
                    <li>Perform system stress tests and pilot runs.</li>
                    <li>Train staff on new workflows and ensure robust documentation.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">8</th>
                <td>Legal Liability for False Results (Customer Disputes)</td>
                <td>Low</td>
                <td>High</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Develop clear communication policies with customers.</li>
                    <li>Implement mechanisms for dispute resolution.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">9</th>
                <td>Increased False Confidence in AI</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Educate employees and stakeholders on the importance of human judgment.</li>
                    <li>Monitor AI system performance regularly and recalibrate models.</li>
                  </ul>
                </td>
            </tr>

            <tr>
              <th scope="row">10</th>
                <td>Technical Debt and System Maintenance Challenges</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Medium</td>
                <td style={{textAlign: 'left'}}>
                  <ul>
                    <li>Plan for regular system updates and maintenance schedules.</li>
                    <li>Document system architecture and workflows.</li>
                    <li>Invest in scalable infrastructure and long-term solution designs.</li>
                  </ul>
                </td>
            </tr>
          </tbody>
        </table>

        <p>
          <h4>Conclusion:</h4>
By identifying the specific risks, analyzing their likelihood and impact, and planning appropriate risk responses, UOB can proactively manage these risks and ensure a successful AI fraud detection system implementation.
        </p>
      </div>

      <br></br>



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
  );
}

export default Research;
