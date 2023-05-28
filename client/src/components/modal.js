import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close the modal after submission
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Title</h2>

            {/* Input fields */}
            <input
              type="text"
              name="navn"
              value={formData.navn}
              onChange={handleInputChange}
              placeholder="Navn"
            />
            {/* Add other input fields similarly */}

            {/* Check buttons */}
            <div className="check-group">
              <h3>Grundskole</h3>
              <label>
                <input
                  type="checkbox"
                  name="grundskole"
                  value="Dansk"
                  checked={formData.grundskole.includes('Dansk')}
                  onChange={handleCheckboxChange}
                />
                Dansk
              </label>
              {/* Add other check buttons for Grundskole similarly */}
            </div>

            <div className="check-group">
              <h3>Trivsel</h3>
              <label>
                <input
                  type="checkbox"
                  name="trivsel"
                  value="Fysisk Trivsel"
                  checked={formData.trivsel.includes('Fysisk Trivsel')}
                  onChange={handleCheckboxChange}
                />
                Fysisk Trivsel
              </label>
              {/* Add other check buttons for Trivsel similarly */}
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

            {/* Submit button */}
            <button onClick={handleSubmit}>Insend</button>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
