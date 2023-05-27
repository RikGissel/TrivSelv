import React, { useState } from 'react';
import '../css/main.css'; // Import the CSS file

const ContentSwitcher = () => {
  const [activeSection, setActiveSection] = useState('Grundskole');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='lessonsWrapper'>
      <div className='lessons-txt-container'>
        <h1>Fagområder</h1>
        <h4>Vi søger Boostere indenfor følgende fagområder</h4>
      </div>
      <div className='btn-container'>
        <button
          onClick={() => handleSectionChange('Grundskole')}
          className={`button ${activeSection === 'Grundskole' ? 'active' : ''} lesson-btn`}
        >
          Grundskole
        </button>
        <button
          onClick={() => handleSectionChange('Gymnasie')}
          className={activeSection === 'Gymnasie' ? 'active' : ''}
        >
          Gymnasie
        </button>
        <button
          onClick={() => handleSectionChange('Trivsel')}
          className={activeSection === 'Trivsel' ? 'active' : ''}
        >
          Trivsel
        </button>
      </div>

      <div>
        {activeSection === 'Grundskole' && (
          <h2>Grundskole Content</h2>
        )}
        {activeSection === 'Gymnasie' && (
          <h2>Gymnasie Content</h2>
        )}
        {activeSection === 'Trivsel' && (
          <h2>Trivsel Content</h2>
        )}
      </div>
    </div>
  );
};

export default ContentSwitcher;
