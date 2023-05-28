import React from 'react';
import '../css/banner.css';



const Banner = ({ type, images, texts, text1, text2 }) => {
    if (type === 'images' && images && images.length === 3 && texts && texts.length === 3) {
      // Banner with images and text
      return (
        <div className="banner banner-with-images">
          <div className="banner-images">
            {images.map((image, index) => (
              <div className="banner-image-container" key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="banner-image" />
                <p className="banner-image-text">{texts[index]}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Text banner
      return (
        <div className="banner banner-with-text">
          <div className="banner-text-container">
            <p className="banner-text-head">{text1}</p>
            <p className="banner-text-author">{text2}</p>
          </div>
        </div>
      );
    }
  };

export default Banner;
