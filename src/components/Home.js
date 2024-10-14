import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import testImage from '../images/test.png';
import TechStack from './TechStack';
import RandomForestDescription from './RandomForestDescription';
import RegisterPrompt from './RegisterPrompt';
import Carousel from './Carousel';

function Home({ isLoggedIn }) {
  return (
    <div>
      
      <Carousel/>

      {/* Conditionally render based on login status */}
      {isLoggedIn ? (
        <h2 className="text-center mt-4">Welcome, user!</h2>
      ) : (
        <RegisterPrompt />
      )}

      <TechStack />
      <RandomForestDescription />
    </div>
  );
}

export default Home;
