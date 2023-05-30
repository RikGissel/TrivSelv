import React, { useState } from 'react';
import '../css/content.css'; 
import ModalComponent from './ModalComponent';



const Content = ({ imageSrc, header, text1, text2, text3, className,btnText, secondButtonClass }) => {
    const containerClassName = `image-text-container ${className}`;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className='content-wrapper' id='section-content-wrapper'>
        <div className={containerClassName}>

            <img src={imageSrc} alt="Image" className="content-image" />

          <div className="content-text-box">
            <h3>{header}</h3>
            <p className='content-paragraph-text'>{text1}</p>
            <p className='content-paragraph-text'>{text2}</p>
            <p className='content-paragraph-text'>{text3}</p>
            <div className="button-container">
              <button className='content-button'>{btnText}</button>
              {secondButtonClass && (
                <button onClick={openModal} className={`content-button ${secondButtonClass}`}>Ansøg nu</button>
              )}
                {isModalOpen && <ModalComponent closeModal={closeModal} />}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
  


