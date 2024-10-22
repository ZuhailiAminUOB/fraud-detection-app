import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import testImage from '../images/test.png';

function Carousel() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="position-relative">
            <img src={testImage} className="d-block w-100 img-fluid" style={{ height: '500px', objectFit: 'cover' }} alt="Slide 1" />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <h5 style={{ fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>Fraud Detection Web App</h5>
              <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>AI-Powered. 99.99% Accuracy.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="position-relative">
            <img src={testImage} className="d-block w-100 img-fluid" style={{ height: '500px', objectFit: 'cover' }} alt="Slide 2" />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <h5 style={{ fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>Register Your Card Here</h5>
              <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>Register your card first to use the application.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="position-relative">
            <img src={testImage} className="d-block w-100 img-fluid" style={{ height: '500px', objectFit: 'cover' }} alt="Slide 3" />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <h5 style={{ fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>AI Capstone Project</h5>
              <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>Done by: Zuhaili, Pravina, Si Hui, Shin, and Kheng Liang</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
