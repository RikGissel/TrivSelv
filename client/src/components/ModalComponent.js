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
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };
  
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      billede: file,
    }));
  };

  const [formErrors, setFormErrors] = useState({});
  const [consentError, setConsentError] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const errors = {};
  
    if (formData.navn.trim() === '') {
      errors.navn = 'Du skal indtaste et gyldigt navn';
      isValid = false;
    }
  
    if (formData.adresse.trim() === '') {
      errors.adresse = 'Du skal indtaste en gyldigt adresse';
      isValid = false;
    }
  
    if (formData.mobilnummer.trim() === '') {
      errors.mobilnummer = 'Du skal indtaste et gyldigt nummer';
      isValid = false;
    }
  
    if (formData.email.trim() === '') {
      errors.email = 'Du skal indtaste en gyldigt email';
      isValid = false;
    }
  
    if (formData.fodselstag.trim() === '') {
      errors.fodselstag = 'Du skal indtaste en gyldigt dato';
      isValid = false;
    }
  
    if (!formData.consent) {
      setConsentError(true);
      isValid = false;
    } else {
      setConsentError(false);
    }
  
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    if (isFormValid && formData.consent) {
      fetch('https://formspree.io/f/xpzeebwe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Form submission successful:', data);
          closeModal(); // Close the modal after successful submission
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
        });
    }
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
            <img src={process.env.PUBLIC_URL + '/x-icon.svg'} alt="Close" />
          </button>
          <h2>Ansøg som BOOSTER</h2>
          <p>
            Udfyld formularen herunder. Du kan vælge at undervise i flere fag og trivsels-emner, blot du lige checker om du
            har kvalifikationerne til det.
          </p>

          {/* Input fields */}
          <div className='modal-input-container'>
            {formErrors.navn && <span className="error-message">{formErrors.navn}</span>}
            <input
              type="text"
              name="navn"
              value={formData.navn}
              onChange={handleInputChange}
              placeholder="Navn"
              className='input-short'
              required
            />

            {formErrors.adresse && <span className="error-message">{formErrors.adresse}</span>}
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleInputChange}
              placeholder="Adresse"
              className='input-short'
              required
            />

            {formErrors.mobilnummer && <span className="error-message">{formErrors.mobilnummer}</span>}
            <input
              type="text"
              name="mobilnummer"
              value={formData.mobilnummer}
              onChange={handleInputChange}
              placeholder="Mobilnummer"
              className='input-short'
              required
            />

            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className='input-short'
              required
            />

            {formErrors.fodselstag && <span className="error-message">{formErrors.fodselstag}</span>}
            <input
              type="text"
              name="fodselstag"
              value={formData.fodselstag}
              onChange={handleInputChange}
              placeholder="Fødselsdag"
              className='input-short'
              required
            />

            <textarea
              name="uddannelse"
              value={formData.uddannelse}
              onChange={handleInputChange}
              placeholder="Hvilken uddannelse har du gennemført?"
              className="input-long"
              required
            />

            <textarea
              name="studie"
              value={formData.studie}
              onChange={handleInputChange}
              placeholder="Hvad studerer du og på hvilket semester? (Kun hvis relevant)"
              className="input-long"
            />
          </div>
          {/* Check buttons */}

           
      </div>

        {/* Upload image button */}
        <div className='file-group'>
          <h3>Trivsel</h3>
          <input type="file" onChange={handleFileChange} />
        </div>
        {/* Consent checkbox */}
        <div className='consent-group'>
        {consentError && <p className="error-message">Du skal acceptere samtykke for at sende formularen.</p>}
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
              required
            />
          </label>
          <p className='consent-text'>
            Du giver hermed samtykke til, at oplysninger du har givet om dig selv kan registreres af TrivSelv ApS., idet registreringen er nødvendig for vurdering af ansøgningen til BOOSTER-rollen som BOOSTER hos TrivSelv ApS. Du er bekendt med, at samtykket til enhver tid kan tilbagekaldes, hvorved TrivSelv ApS. forpligtes til at slette oplysningerne om dig. Du meddeler tillige samtykke til, at TrivSelv ApS. kan foretage registrering af disse oplysninger. Hvis du tilknyttes som BOOSTER, gemmer vi dine oplysninger i løbet af hele din tilknytning hos TrivSelv ApS., hvorimod vi straks sletter alle data og personoplysninger, såfremt du får afslag på din ansøgning efter screening eller efter samtale.
          </p>

        </div>
        <div className='modal-button-container'>
          <button className='modal-button' onClick={handleSubmit}>Insend</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
