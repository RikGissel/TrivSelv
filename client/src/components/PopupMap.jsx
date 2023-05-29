import React, { useState } from 'react';
import '../css/main.css';

const Popup = ({ content }) => {
  return (
    <div className="popup">
      <div className="popup-content">{content}</div>
    </div>
  );
};

const ContentSwitcher = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
    setSelectedLanguage('');
  };

  const handleLanguageClick = (language, className) => {
    switch (className) {
      case 'box-1':
      case 'box-2':
        setSelectedLanguage(language);
        break;
      default:
        setSelectedLanguage('');
        break;
    }
  };

  return (
    <div className="lessons-container">
      <div className="lessons-wrapper">
        <h1 className="lessons-heading">Fagområder</h1>
        <h4 className="lessons-subheading">Vi søger Boostere indenfor følgende fagområder</h4>
        <div>
          <button className="lessons__btn-1" onClick={() => handleButtonClick('section1')}>
            Grundskole
          </button>
          <button className="lessons__btn-2" onClick={() => handleButtonClick('section2')}>
            Gymnasie
          </button>
          <button className="lessons__btn-3" onClick={() => handleButtonClick('section3')}>
            Trivsel
          </button>

          {activeSection === 'section1' && (
            <Section1 className="lesson-section__1" handleLanguageClick={handleLanguageClick} />
          )}
          {activeSection === 'section2' && (
            <Section2 className="lesson-section__2" handleLanguageClick={handleLanguageClick} />
          )}
          {activeSection === 'section3' && (
            <Section3 className="lesson-section__3" handleLanguageClick={handleLanguageClick} />
          )}
          {/* Section 1 popups */}
          {selectedLanguage === 'Tysk' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Tysk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                    <br />
                    Gode sprogkundskaber skriftligt og mundtligt
                  </p>
                  Evt. særlige krav:
                  <p className="popup-txt">(skal være fortsættersprog)</p>
                </>
              }
            />
          )}
          {selectedLanguage === 'Spansk' && activeSection === 'section1' && <Popup content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Spansk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                    <br />
                    Gode sprogkundskaber skriftligt og mundtligt
                  </p>
                </>
              } />}
          {selectedLanguage === 'Engelsk' && activeSection === 'section1' && <Popup content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Engelsk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                    <br />
                    Gode sprogkundskaber skriftligt og mundtligt
                  </p>
                </>
              } />}

              {/* Section 2 popups */}
          {selectedLanguage === 'Tysk' && activeSection === 'section2' && <Popup content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Tysk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  4. semester gennemført på fagrelevant uddannelse <br />Avancerede mundtlige og skriftlige færdigheder<br /> Eller anden relevant baggrund</p>
                </>
              } />}
          {selectedLanguage === 'Spansk' && activeSection === 'section2' && <Popup content="Testing5" />}
          {selectedLanguage === 'Engelsk' && activeSection === 'section2' && <Popup content="Testing6" />}
        </div>
      </div>
    </div>
  );
};

const LanguageBox = ({ className, language, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {language}
    </div>
  );
};

const Section1 = ({ className, handleLanguageClick }) => {
  const data = [
    'Tysk',
    'Spansk',
    'Engelsk',
    'Samfundsfag',
    'Matematik',
    'Fransk',
    'Drama',
    'Dansk',
    'Biologi',
    'Madkundskab',
    'Historie',
    'Dansk som andetsprog',
    'Natur/Teknologi',
    'Fysik/kemi',
    'Idræt',
    'Musik',
    'Billedkunst',
    'Kristendomkundskab',
    'Geografi',
  ];

  const handleClick = (language) => {
    handleLanguageClick(language, 'box-1');
  };

  return (
    <div id="lessons-btn-wrapper__1" className={className}>
      {data.map((item, index) => (
        <LanguageBox className="box-1" key={index} language={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

const Section2 = ({ className, handleLanguageClick }) => {
  const data = [
    'Dansk',
    'Engelsk',
    'Historie',
    'Musik',
    'Religion',
    'Spansk',
    'Fransk',
    'Tysk',
    'Biologi',
    'Bioteknologi',
    'Fysik',
    'Geografi',
    'Idræt',
    'Kemi',
    'Matematik',
    'Naturgeografi',
    'Programmering',
    'Psykologi',
    'Samfundsfag',
  ];

  const handleClick = (language) => {
    handleLanguageClick(language, 'box-2');
  };

  return (
    <div id="lessons-btn-wrapper__2" className={className}>
      {data.map((item, index) => (
        <LanguageBox className="box-2" key={index} language={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

const Section3 = ({ className, handleLanguageClick }) => {
  const data = [
    'Kost & Motion',
    'Social Trivsel',
    'Psykisk Trivsel',
    'Fysisk Trivsel',
    'Angst Støtte',
    'Digital Dannelse',
    'Støtte Venskab',
    'Misbrug & Afhængighed',
    'ADHD/ADD-støtte',
    'Højt Begavede',
    'Sorg Støtte',
    'Seksualvejledning',
    'Uddannelsesvejledning',
    'Stress Støtte',
    'Skolevægring',
    'Uddannelsesparathed & Info',
  ];

  const handleClick = (language) => {
    handleLanguageClick(language, 'box-3');
  };

  return (
    <div id="lessons-btn-wrapper__3" className={className}>
      {data.map((item, index) => (
        <LanguageBox className="box-3" key={index} language={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default ContentSwitcher;
