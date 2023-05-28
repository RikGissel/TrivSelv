import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import '../css/landing.css';

const Landing = ({ landIMG, landHeader, landText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
    <div className="landing-wrapper">
        <div className="landing-image"></div>
        {/* <img src={landIMG} alt="Landing Image" className="landing-image" /> */}
        <div className="landing-content">
          <h1 className="landing-header">{landHeader}</h1>
          <p className="landing-paragraph">{landText}</p>
          <button className="landing-button" onClick={openModal}>
            Ansøg nu
          </button>
        </div>

        {isModalOpen && <ModalComponent closeModal={closeModal} />}
      </div>
    </section>
  );
};

export default Landing;

