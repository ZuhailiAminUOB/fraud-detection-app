import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function AboutUs() {
  // Team member data
  const teamMembers = [
    { name: 'Zuhaili', photo: 'https://via.placeholder.com/100', role: 'Developer' },
    { name: 'Peh Shin', photo: 'https://via.placeholder.com/100', role: 'Developer' },
    { name: 'Si Hui', photo: 'https://via.placeholder.com/100', role: 'Developer' },
    { name: 'Keng Liang', photo: 'https://via.placeholder.com/100', role: 'Developer' },
    { name: 'Pravina', photo: 'https://via.placeholder.com/100', role: 'Developer' },
  ];

  return (
    <div className="container my-4">
      <div className="border rounded p-3 mb-4" style={{ borderColor: '#000000', borderWidth: '2px', borderStyle: 'solid' }}>
        <h2 className="text-center">About Us</h2>
        <p className="text-center">
        We are a group of five passionate individuals: Zuhaili, Peh Shin, Si Hui, Keng Liang, and Pravina, who are part of the UOB Technology Development Programme 2024. Our mission is to create an AI Fraud Detection Web App as part of our TDP Capstone project.
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
                  className="rounded-circle mb-2 border border-primary border-3"
                  style={{ width: '100px', height: '100px' }}
                />
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
