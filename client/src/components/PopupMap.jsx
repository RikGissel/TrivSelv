import React, { useState } from 'react';
import '../css/main.css';

const ContentSwitcher = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="lessons-container">
      <div className="lessons-wrapper">
        <h1 className="lessons-heading">Fagområder</h1>
        <h4 className="lessons-subheading">Vi søger Boostere indenfor følgende fagområder</h4>
        <div>
          <button className="lessons__btn-1" onClick={() => handleButtonClick('section1')}>Grundskole</button>
          <button className="lessons__btn-2" onClick={() => handleButtonClick('section2')}>Gymnasie</button>
          <button className="lessons__btn-3" onClick={() => handleButtonClick('section3')}>Trivsel</button>

          {activeSection === 'section1' && <Section1 className="lesson-section__1" />}
          {activeSection === 'section2' && <Section2 className="lesson-section__2" />}
          {activeSection === 'section3' && <Section3 className="lesson-section__3" />}
        </div>
      </div>
    </div>
  );
};

const Section1 = ({ className }) => {
  const data = [
    "Tysk", "Spansk", "Engelsk", "Samfundsfag", "Matematik", "Fransk", "Drama", "Dansk", "Biologi",
    "Madkundskab", "Historie", "Dansk som andetsprog", "Natur/Teknologi", "Fysik/kemi", "Idræt", "Musik",
    "Billedkunst", "Kristendomkundskab", "Geografi"
  ];

  return (
    <div id="lessons-btn-wrapper__1" className={className}>
      {data.map((item, index) => (
        <div className="box-1" key={index}>{item}</div>
      ))}
    </div>
  );
};

const Section2 = ({ className }) => {
  const data = [
    "Dansk", "Engelsk", "Historie", "Musik", "Religion", "Spansk", "Fransk", "Tysk", "Biologi", "Bioteknologi", "Fysik", "Geografi", "Idræt", "Kemi", "Matematik", "Naturgeografi", "Programmering", "Psykologi", "Samfundsfag"
  ];

  return (
    <div id="lessons-btn-wrapper__2" className={className}>
      {data.map((item, index) => (
        <div className="box-2" key={index}>{item}</div>
      ))}
    </div>
  );
};

const Section3 = ({ className }) => {
  const data = [
    "Kost & Motion", "Social Trivsel", "Psykisk Trivsel", "Fysisk Trivsel", "Angst Støtte", "Digital Dannelse",
      "Støtte Venskab", "Misbrug & Afhængighed", "ADHD/ADD-støtte", "Højt Begavede", "Sorg Støtte",
      "Seksualvejledning", "Uddannelsesvejledning", "Stress Støtte", "Skolevægring", "Uddannelsesparathed & Info"
  ];

  return (
    <div id="lessons-btn-wrapper__3" className={className}>
      {data.map((item, index) => (
        <div className="box-3" key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ContentSwitcher;
