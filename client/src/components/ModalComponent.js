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
    let updatedArray;
  
    if (checked) {
      updatedArray = [...formData[name], value]; 
    } else {
      updatedArray = formData[name].filter((item) => item !== value); 
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedArray,
    }));
  };

  const handleConsentChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      consent: checked,
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
      errors.consent = 'Du skal acceptere betingelserne';
      isValid = false;
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
  <div className='input-group'>
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
  </div>

  <div className='input-group'>
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
  </div>

  <div className='input-group'>
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
</div>


          {/* Check buttons */}
<div className='check-group-container'>         
  <div className="check-group">
    <h4>Grundskole</h4>
      <label>
          <input type="checkbox" name="grundskole" value="Dansk" checked={formData.grundskole.includes('Dansk')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Dansk</span>
  </label>
    <label>
      <input type="checkbox" name="grundskole" value="Matematik" checked={formData.grundskole.includes('Matematik')} onChange={handleCheckboxChange}/>
    <span class="labelTxt">Matematik</span>
  </label>
    <label>
      <input type="checkbox" name="grundskole" value="Samfundsfag" checked={formData.grundskole.includes('Samfundsfag')} onChange={handleCheckboxChange}/>
    <span class="labelTxt">Samfundsfag</span>
  </label>
    <label>
      <input type="checkbox" name="grundskole" value="Engelsk" checked={formData.grundskole.includes('Engelsk')} onChange={handleCheckboxChange}/>
        <span class="labelTxt">Engelsk</span>
  </label>
  <label>
      <input type="checkbox" name="grundskole" value="Spansk" checked={formData.grundskole.includes('Spansk')} onChange={handleCheckboxChange}/>
        <span class="labelTxt">Spansk</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Tysk" checked={formData.grundskole.includes('Tysk')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Tysk</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Fransk" checked={formData.grundskole.includes('Fransk')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Fransk</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Kodning" checked={formData.grundskole.includes('Kodning')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Kodning</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Biologi" checked={formData.grundskole.includes('Biologi')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Biologi</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Fysik/Kemi" checked={formData.grundskole.includes('Fysik/Kemi')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Fysik/Kemi</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Historie" checked={formData.grundskole.includes('Historie')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Historie</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Dansk Som Andetsprog" checked={formData.grundskole.includes('Dansk Som Andetsprog')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Dansk Som Andetsprog</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Psykologi" checked={formData.grundskole.includes('Psykologi')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Psykologi</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Idræt" checked={formData.grundskole.includes('Idræt')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Idræt</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Økonomi" checked={formData.grundskole.includes('Økonomi')} onChange={handleCheckboxChange}/>
      <span class="labelTxt">Økonomi</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Bioteknologi" checked={formData.grundskole.includes('Bioteknologi')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Bioteknologi</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Dansk For Ordblinde" checked={formData.grundskole.includes('Dansk For Ordblinde')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Dansk For Ordblinde</span>
    </label>
  <label>
    <input type="checkbox" name="grundskole" value="Afsætning" checked={formData.grundskole.includes('Afsætning')} onChange={handleCheckboxChange} />
      <span class="labelTxt">Afsætning</span>
  </label>
</div>

<div className="check-group">
<h4>Trivsel</h4>
            <label>
          <input type="checkbox" name="grundskole" value="Fysisk Trivsel" checked={formData.grundskole.includes('Fysisk Trivsel')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Fysisk Trivsel</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Psykisk Trivsel" checked={formData.grundskole.includes('Psykisk Trivsel')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Psykisk Trivsel</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Social Trivsel" checked={formData.grundskole.includes('Social Trivsel')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Social Trivsel</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Kost & Motion" checked={formData.grundskole.includes('Kost & Motion')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Kost & Motion</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Angst Støtte" checked={formData.grundskole.includes('Angst Støtte')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Angst Støtte</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Digital Dannelse" checked={formData.grundskole.includes('Digital Dannelse')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Digital Dannelse</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Støtte Venskab" checked={formData.grundskole.includes('Støtte Venskab')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Støtte Venskab</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Misbrug & Afhængighed" checked={formData.grundskole.includes('Misbrug & Afhængighed')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Misbrug & Afhængighed</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="ADHD/ADD-støtte" checked={formData.grundskole.includes('ADHD/ADD-støtte')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">ADHD/ADD-støtte</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Højt Begavede" checked={formData.grundskole.includes('Højt Begavede')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Højt Begavede</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Sorg Støtte" checked={formData.grundskole.includes('Sorg Støtte')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Sorg Støtte</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Seksualvejledning" checked={formData.grundskole.includes('Seksualvejledning')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Seksualvejledning</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Uddannelsesvejledning" checked={formData.grundskole.includes('Uddannelsesvejledning')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Uddannelsesvejledning</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Stress Støtte" checked={formData.grundskole.includes('Stress Støtte')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Stress Støtte</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Skolevægring" checked={formData.grundskole.includes('Skolevægring')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Skolevægring</span>
          </label>
          <label>
          <input type="checkbox" name="grundskole" value="Uddannelsesparathed & Info" checked={formData.grundskole.includes('Uddannelsesparathed & Info')} onChange={handleCheckboxChange}/>
          <span class="labelTxt">Uddannelsesparathed & Info</span>
          </label>           
      </div>
    </div>
  </div>

        {/* Upload image button */}
        <div className='file-group'>
          <h4>Upload billede</h4>
          <input type="file" onChange={handleFileChange} />
        </div>
        {/* Consent checkbox */}
        <div className='consent-group'>
        {formErrors.consent && <span className="error-message">{formErrors.consent}</span>}
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleConsentChange}
              required
            />
          </label>
          <p className='consent-text'>
            Du giver hermed samtykke til, at oplysninger du har givet om dig selv kan registreres af TrivSelv ApS., idet registreringen er nødvendig for vurdering af ansøgningen til BOOSTER-rollen som BOOSTER hos TrivSelv ApS. Du er bekendt med, at samtykket til enhver tid kan tilbagekaldes, hvorved TrivSelv ApS. forpligtes til at slette oplysningerne om dig. Du meddeler tillige samtykke til, at TrivSelv ApS. kan foretage registrering af disse oplysninger. Hvis du tilknyttes som BOOSTER, gemmer vi dine oplysninger i løbet af hele din tilknytning hos TrivSelv ApS., hvorimod vi straks sletter alle data og personoplysninger, såfremt du får afslag på din ansøgning efter screening eller efter samtale.
          </p>

        </div>
        <div className='modal-button-container'>
          <button className='modal-button' onClick={handleSubmit}>Indsend</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
