import React, { useState } from 'react';
import '../css/main.css';

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>
          X
        </button>
        <div className="popup-content">{content}</div>
      </div>
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
      case 'box-3':
        setSelectedLanguage(language);
        break;
      default:
        setSelectedLanguage('');
        break;
    }
  };

  const handleClosePopup = () => {
    setSelectedLanguage('');
  };

  return (
    <div className="lessons-container">
      <div className="lessons-wrapper">
        <h1 className="lessons-heading">Fagområder</h1>
        <h4 className="lessons-subheading">Vi søger Boostere indenfor følgende fagområder</h4>
        <div className='lessons-main__wrapper'>
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
              onClose={handleClosePopup}
            />
          )}

          {selectedLanguage === 'Spansk' && activeSection === 'section1' && (
            <Popup
              content={
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
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Engelsk' && activeSection === 'section1' && (
            <Popup
              content={
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
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Samfundsfag' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Samfundsfag</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Matematik' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Matematik</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Fransk' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Fransk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                    <br />
                    Gode sprogkundskaber skriftligt og mundtligt
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Dansk' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Dansk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Biologi' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Biologi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Historie' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Historie</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Dansk som andetsprog' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Dansk som andetsprog</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Læreruddannet med DSA kendskab <br />
                    Ba i Dansk <br />
                    Ba i nordisk sprog og litt. <br />
                    Ba i Lingvistik <br />
                    Ba i Retorik <br />
                    Eller anden relevant baggrund <br />
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Natur/Teknologi' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Natur/Teknologi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Fysik/Kemi' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Fysik/Kemi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Idræt' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Idræt</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Musik' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Musik</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført musisk linje
                    <br />
                    Grundlæggende musisk forståelse <br/>
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Billedkunst' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Billedkunst</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                    <br />
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Kristendomkundskab' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Kristendomkundskab</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Geografi' && activeSection === 'section1' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Geografi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    Min. 18 år & 2.G gennemført
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

          {/* Section 2 popups */}
          {selectedLanguage === 'Dansk' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Dansk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

          {selectedLanguage === 'Engelsk' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Engelsk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse<br/>
                    Avancerede mundtlige og skriftlige færdigheder
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Historie' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Historie</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Musik' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Musik</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse<br/>
                    Avancerede mundtlige og skriftlige færdigheder<br/>
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Religion' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Religion</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Spansk' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Spansk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse<br/>
                    Avancerede mundtlige og skriftlige færdigheder<br/>
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Fransk' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Fransk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse<br/>
                    Avancerede mundtlige og skriftlige færdigheder<br/>
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Tysk' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Tysk</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse<br/>
                    Avancerede mundtlige og skriftlige færdigheder<br/>
                    Eller anden relevant baggrund
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Biologi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Biologi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Bioteknologi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Bioteknologi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Fysik' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Fysik</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Geografi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Geografi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Idræt' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Idræt</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Kemi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Kemi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Matematik' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Matematik</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Naturgeografi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Naturgeografi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Programmering' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Programmering</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Psykologi' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Psykologi</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Samfundsfag' && activeSection === 'section2' && (
            <Popup
              content={
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Samfundsfag</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                    4. semester gennemført på fagrelevant uddannelse
                  </p>
                </>
              }
              onClose={handleClosePopup}
            />
          )}

          {/* Section 3 popups */}
          {selectedLanguage === 'Kost & Motion' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Kost & Motion</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Idræt, Fysioterapi, Ergoterapi, Medicin, Sygepleje, ernæring & Sundhed m.v.</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

          {selectedLanguage === 'Social Trivsel' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Social Trivsel</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Psykisk Trivsel' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Psykisk Trivsel</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Fysisk Trivsel' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Fysisk Trivsel</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Idræt, Fysioterapi, Ergoterapi, Medicin, Sygepleje m.v.</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Håndtering af angst' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Håndtering af angst</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Psykologi, Pædagogik m.v. Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Digital Dannelse' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Digital Dannelse</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  4. semester gennemført på fagrelevant uddannelse</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Hjælp til venskaber' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Hjælp til venskaber</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Misbrug og afhængighed' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Misbrug og afhængighed</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Misbrugskonsulent, Psykologi, Socialrådgiver, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Hjælp til ADHD og ADD' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Hjælp til ADHD og ADD</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Støtte til højt begavede' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Støtte til højt begavede</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
                  </p>
                  Evt. særlige krav:
                  <p className="popup-txt">Kræver indgående kendskab til HB</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Søvnudfordringer' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Søvnudfordringer</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Psykologi, medicin, fysioterapi eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Seksualundervisning' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Seksualundervisning</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  4. semester gennemført på fagrelevant uddannelse<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse med seksualvejledning, Psykoterapeut, Fysioterapeut, Sygepleje eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Uddannelsesvejledning' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Uddannelsesvejledning</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  4. semester gennemført på fagrelevant uddannelse<br/>
Eks. Uddannelsesvidenskab, Socialrådgiver, Læreruddannelse m.v.</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Stresshåndtering' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Stresshåndtering</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  4. semester gennemført på fagrelevant uddannelse, Psykologi, Medicin, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Skolevægring' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Skolevægring</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
                </div>
              }
              onClose={handleClosePopup}
            />
          )}

{selectedLanguage === 'Uddannelsesparathed' && activeSection === 'section3' && (
            <Popup
              content={
                <div id='trivselv-popup'>
                <>
                  <h2 style={{ transform: 'translateY(25%)' }}>Uddannelsesparathed</h2>
                  <br />
                  Generelle Krav:
                  <br />
                  <p className="popup-txt" style={{ marginBottom: '20px' }}>
                  Ba i relevant uddannelsesretning<br/>
Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund</p>
                </>
              </div>
              }
              onClose={handleClosePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

/* Section 1 */
const Section1 = ({ handleLanguageClick }) => {
  return (
    <div className='lesson-section__1'>
      <div className="box-1" onClick={() => handleLanguageClick('Tysk', 'box-1')}>
        Tysk
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Spansk', 'box-1')}>
        Spansk
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Engelsk', 'box-1')}>
        Engelsk
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Samfundsfag', 'box-1')}>
        Samfundsfag
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Matematik', 'box-1')}>
        Matematik
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Fransk', 'box-1')}>
        Fransk
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Dansk', 'box-1')}>
        Dansk
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Biologi', 'box-1')}>
        Biologi
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Historie', 'box-1')}>
        Historie
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Dansk som andetsprog', 'box-1')}>
        Dansk som andetsprog
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Natur/Teknologi', 'box-1')}>
        Natur/Teknologi
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Fysik/Kemi', 'box-1')}>
        Fysik/Kemi
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Idræt', 'box-1')}>
        Idræt
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Musik', 'box-1')}>
        Musik
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Billedkunst', 'box-1')}>
        Billedkunst
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Kristendomkundskab', 'box-1')}>
        Kristendomkundskab
      </div>
      <div className="box-1" onClick={() => handleLanguageClick('Geografi', 'box-1')}>
        Geografi
      </div>
    </div>
  );
};

/* Section 2 */
const Section2 = ({ handleLanguageClick }) => {
  return (
    <div className='lesson-section__2'>
      <div className="box-2" onClick={() => handleLanguageClick('Dansk', 'box-2')}>
        Dansk
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Engelsk', 'box-2')}>
        Engelsk
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Historie', 'box-2')}>
        Historie
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Musik', 'box-2')}>
        Musik
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Religion', 'box-2')}>
        Religion
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Spansk', 'box-2')}>
        Spansk
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Fransk', 'box-2')}>
        Fransk
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Tysk', 'box-2')}>
        Tysk
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Biologi', 'box-2')}>
        Biologi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Bioteknologi', 'box-2')}>
        Bioteknologi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Fysik', 'box-2')}>
        Fysik
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Geografi', 'box-2')}>
        Geografi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Idræt', 'box-2')}>
        Idræt
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Kemi', 'box-2')}>
        Kemi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Matematik', 'box-2')}>
        Matematik
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Naturgeografi', 'box-2')}>
        Naturgeografi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Programmering', 'box-2')}>
        Programmering
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Psykologi', 'box-2')}>
        Psykologi
      </div>
      <div className="box-2" onClick={() => handleLanguageClick('Samfundsfag', 'box-2')}>
        Samfundsfag
      </div>
    </div>
  );
};

/* Section 3 */
const Section3 = ({ handleLanguageClick }) => {
  return (
  <div className='lesson-section__3'>
  <div className="box-3" onClick={() => handleLanguageClick('Kost & Motion', 'box-3')}>
  Kost & Motion
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Social Trivsel', 'box-3')}>
  Social Trivsel
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Psykisk Trivsel', 'box-3')}>
  Psykisk Trivsel
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Fysisk Trivsel', 'box-3')}>
  Fysisk Trivsel
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Håndtering af angst', 'box-3')}>
  Håndtering af angst
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Digital Dannelse', 'box-3')}>
  Digital Dannelse
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Hjælp til venskaber', 'box-3')}>
  Hjælp til venskaber
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Misbrug og afhængighed', 'box-3')}>
  Misbrug og afhængighed
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Hjælp til ADHD og ADD', 'box-3')}>
  Hjælp til ADHD og ADD
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Støtte til højt begavede', 'box-3')}>
  Støtte til højt begavede
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Søvnudfordringer', 'box-3')}>
  Søvnudfordringer
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Seksualundervisning', 'box-3')}>
  Seksualundervisning
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Uddannelsesvejledning', 'box-3')}>
  Uddannelsesvejledning
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Stresshåndtering', 'box-3')}>
  Stresshåndtering
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Skolevægring', 'box-3')}>
  Skolevægring
  </div>
  <div className="box-3" onClick={() => handleLanguageClick('Uddannelsesparathed', 'box-3')}>
  Uddannelsesparathed
  </div>
  </div>
  );
  };

export default ContentSwitcher;
