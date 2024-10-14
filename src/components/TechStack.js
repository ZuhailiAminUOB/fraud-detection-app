import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';

const TechStack = () => {
  const techs = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Flask', icon: <SiFlask /> }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tech Stack</h2>
      <div className="row text-center">
        {techs.map((tech, index) => (
          <div key={index} className="col-md-2 col-sm-4 mb-4">
            <div
              className="p-3 border rounded bg-light shadow-lg tech-card"
              style={{
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 123, 255, 0.5)'; // Darker shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Scale back down
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Original shadow
              }}
            >
              <div className="tech-icon mb-2" style={{ fontSize: '3rem', color: '#007bff' }}>
                {tech.icon}
              </div>
              <h5 className="font-weight-bold">{tech.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
