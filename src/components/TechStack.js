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
            <div className="p-3 border rounded bg-light shadow-lg tech-card">
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
