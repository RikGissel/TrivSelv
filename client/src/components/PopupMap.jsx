import React, { useState } from 'react';
import '../css/main.css';

const data = {
  section1: [
    "Tysk", "Spansk", "Engelsk", "Samfundsfag", "Matematik", "Fransk", "Drama", "Dansk", "Biologi",
    "Madkundskab", "Historie", "Dansk som andetsprog", "Natur/Teknologi", "Fysik/kemi", "Idræt", "Musik",
    "Billedkunst", "Kristendomkundskab", "Geografi"
  ],
  section2: [
    "Billedkunst", "Dansk", "Engelsk", "Historie", "Idéhistorie", "Latin", "Mediefag", "Musik", "Oldtidskundskab", "Religion", "Retorik", "Spansk", "Fransk", "Tysk", "Astronomi", "Biologi", "Bioteknologi", "Fysik",
    "Geografi", "Idræt", "Informatik", "IT", "Kemi", "Matematik", "Naturgeografi", "Programmering",
    "Afsætning", "Erhvervsjura", "Erhvervsøkonomi", "Finansiering", "Innovation", "International økonomi",
    "Psykologi", "Samfundsfag", "Virksomhedsøkonomi"
  ],
  section3: [
    "Kost & Motion", "Social Trivsel", "Psykisk Trivsel", "Fysisk Trivsel", "Angst Støtte", "Digital Dannelse",
    "Støtte Venskab", "Misbrug & Afhængighed", "ADHD/ADD-støtte", "Højt Begavede", "Sorg Støtte",
    "Seksualvejledning", "Uddannelsesvejledning", "Stress Støtte", "Skolevægring", "Uddannelsesparathed & Info"
  ]
};

function ContentSwitcher() {
  const [activeSection, setActiveSection] = useState('section1');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>

      <div className="overlay"></div>
      <main>
        <div className="headings-text">
          <h1>Fagområder</h1>
          <h4>Vi søger Boostere indenfor følgende fagområder</h4>
        </div>
        <section className="btns">
          <button className="button-style" id="btn1" onClick={() => handleSectionChange('section1')}>
            Grundskole
          </button>
          <button className="button-style" id="btn2" onClick={() => handleSectionChange('section2')}>
            Gymnasie
          </button>
          <button className="button-style" id="button3" onClick={() => handleSectionChange('section3')}>
            Trivsel
          </button>
        </section>

        <div id="section1" className={`animate__animated ${activeSection === 'section1' ? 'animate__fadeIn' : 'hidden'}`}>
          {data.section1.map((item, index) => (
            <div key={index} className="box-1">
              {item}
            </div>
          ))}
        </div>

        <div id="section2" className={`animate__animated ${activeSection === 'section2' ? 'animate__fadeIn' : 'hidden'}`}>
          {data.section2.map((item, index) => (
            <div key={index} className="box-2">
              {item}
            </div>
          ))}
        </div>

        <div id="section3" className={`animate__animated ${activeSection === 'section3' ? 'animate__fadeIn' : 'hidden'}`}>
          {data.section3.map((item, index) => (
            <div key={index} className="box-3">
              {item}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ContentSwitcher;
