import React from 'react';
import '../css/content.css'; 


const Content = ({ imageSrc, header, text1, text2, text3, className,btnText, secondButtonClass }) => {
    const containerClassName = `image-text-container ${className}`;
  
    return (
      <div className='content-wrapper'>
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
                <button className={`content-button ${secondButtonClass}`}>Ansøg nu</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
  


