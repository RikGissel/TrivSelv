import React from 'react';
import '../css/landing.css';

const Landing = ({ landIMG, landHeader, landText }) => {
  return (
    <div className="landing-wrapper">
      <img src={landIMG} alt="Landing Image" className="landing-image" />
      <div className="landing-content">
        <h1 className="landing-header">{landHeader}</h1>
        <p className="landing-paragraph">{landText}</p>
        <button className="landing-button">Ansøg nu</button>
      </div>
    </div>
  );
};

export default Landing;
