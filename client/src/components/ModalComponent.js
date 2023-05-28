import React, { useState, useRef, useEffect } from 'react';
import '../css/modal.css';

const ModalComponent = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    navn: '',
    adresse: '',
    mobilnummer: '',
    email: '',
    fodselstag: '',
    uddannelse: '',
    studie: '',
    grundskole: [],
    trivsel: [],
    billede: null,
    consent: false,
  });

  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          [name]: [...prevData[name], value],
        };
      } else {
        return {
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        };
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      billede: file,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
    closeModal(); // Close the modal after submission
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className='modal-wrapper'>
        <button className="close-button" onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + '/x-icon.svg'}></img>
        </button>
        <h2>Ansøg som BOOSTER</h2>
        <p>
          Udfyld formularen herunder. Du kan vælge at undervise i flere fag og trivsels-emner, blot du lige checker om du
          har kvalifikationerne til det.  
        </p>

        {/* Input fields */}
        <div className='modal-input-container'>
        <input type="text" name="navn" value={formData.navn} onChange={handleInputChange} placeholder="Navn" className='input-short' />
        <input type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} placeholder="Adresse" className='input-short' />
        <input type="text" name="mobilnummer" value={formData.mobilnummer} onChange={handleInputChange} placeholder="Mobilnummer" className='input-short'/>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className='input-short' />
        <input type="text" name="fodselstag" value={formData.fodselstag} onChange={handleInputChange} placeholder="Fødselsdag" className='input-short'/>
        <textarea name="uddannelse" value={formData.uddannelse} onChange={handleInputChange} placeholder="Hvilken uddannelse har du gennemført?" className="input-long"/>
        <textarea name="studie" value={formData.studie} onChange={handleInputChange} placeholder="Hvad studerer du og på hvilket semester? (Kun hvis relevant)" className="input-long" />
        </div>
        {/* Check buttons */}
        <div className="check-group">
          <h3>Grundskole</h3>
          {/* Add check buttons for Grundskole */}
        </div>
        <div className="check-group">
          <h3>Trivsel</h3>
          {/* Add check buttons for Trivsel */}
        </div>
        
        {/* Upload image button */}
        <input type="file" onChange={handleFileChange} />
        {/* Consent checkbox */}
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
          />
          I agree to the terms and conditions
        </label>
          <button onClick={handleSubmit}>Insend</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
