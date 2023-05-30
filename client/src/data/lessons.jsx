import React from 'react';
import jsonData from '../json/sectionData.json';
import lessonsInfo from './lessonInfo';

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          {content}
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const PopupContent = ({ selectedLesson }) => {
  const sections = jsonData;

  if (sections.section1.includes(selectedLesson)) {
    const { title, languageSkills, additionalRequirements, requirements } = lessonsInfo[selectedLesson];

    return (
      <>
        <h2 style={{ transform: 'translateY(25%)' }}>{title}</h2>
        <br />
        Generelle Krav:
        <br />
        <p className="popup-txt" style={{ marginBottom: '20px' }}>
          Min. 18 år & 2.G gennemført
          <br />
          <p>{languageSkills}</p>
        </p>
        {additionalRequirements && (
          <>
            Evt. særlige krav:
            <p className="popup-txt">{additionalRequirements}</p>
          </>
        )}
        {requirements && <p className="popup-txt">{requirements}</p>}
      </>
    );
  }

  return null;
};

const Lessons = ({ selectedLesson, activeSection, handleClosePopup }) => {
  const lectures = [
    'Tysk',
    'Spansk',
    'Engelsk',
    'Samfundsfag',
    'Matematik',
    'Fransk',
    'Dansk',
    'Biologi',
    'Historie',
    'Dansk som andetsprog',
    'Natur/Teknologi',
    'Fysik/Kemi',
    'Idræt',
    'Musik',
    'Billedkunst',
    'Kristendomskundskab',
    'Geografi'
  ];

  if (selectedLesson && activeSection === 'section1' && lectures.includes(selectedLesson)) {
    return (
      <Popup
        content={<PopupContent selectedLesson={selectedLesson} />}
        onClose={handleClosePopup}
      />
    );
  }

  return null;
};

export default Lessons;
