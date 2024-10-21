import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import zuhaili from '../images/zuhaili.png';
import sihui from '../images/sihui.png';
import shin from '../images/shin.png';
import pravina from '../images/pravina.png';
import kl from '../images/kl.png'

function AboutUs() {
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


  // Team member data
  const teamMembers = [
    { name: 'Zuhaili', photo: zuhaili, role: 'Developer' },
    { name: 'Peh Shin', photo: shin, role: 'Developer' },
    { name: 'Si Hui', photo: sihui, role: 'Developer' },
    { name: 'Kheng Liang', photo: kl, role: 'Developer' },
    { name: 'Pravina', photo: pravina, role: 'Developer' },
  ];

  return (
    <div className="container my-4">
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#000000', borderWidth: '2px', borderStyle: 'solid' }}>
        <h2 className="text-center">About Us</h2>
        <p className="text-center">
          We are a group of five passionate individuals: <b> Zuhaili, Peh Shin, Si Hui, Kheng Liang, and Pravina</b>, who are part of the UOB Technology Development Programme 2024. Our mission is to create an AI Fraud Detection Web App as part of our TDP Capstone project.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#000000', borderWidth: '2px', borderStyle: 'solid' }}>
        <h3 className="text-center">About the Programme</h3>
        <p className="text-center">
          The UOB Technology Development Programme is designed to cultivate emerging talent in technology within the banking sector. Participants will develop essential skills through a combination of structured training, hands-on project experience, and mentorship from industry professionals.
        </p>
        <p className="text-center">
          As fresh graduates eager to enter the tech industry, we have been tasked with creating an innovative AI Fraud Detection Web Application as our Capstone project for this programme.
        </p>
      </div>

      <div className="border rounded p-3 mb-4" style={{ borderColor: '#000000', borderWidth: '2px', borderStyle: 'solid' }}>
        <h3 className="text-center">Meet the Team</h3>
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-md-2 text-center my-4" key={member.name}>
              <div className="team-member">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-circle mb-2 border border-dark border-3"
                  style={{ 
                    width: '100px', 
                    height: '100px',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'; // Reset scale
                  }}
                />
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button with dynamic text */}
        <button
          className="btn btn-secondary mt-4"
          onClick={scrollToTop}
          style={{
              position: 'fixed',
              bottom: '35px',  // Reduce the value to move the button up
              right: '20px',
              color: 'white',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '1rem',
              zIndex: '1000',  // Ensure it's above other elements
            }}
         >
          {buttonText} {/* Button text dynamically changes */}
        </button>

      </div>
    </div>
  );
}

export default AboutUs;
