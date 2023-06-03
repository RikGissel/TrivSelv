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

const PopupContent = ({ selectedLesson, activeSection }) => {
  const sections = jsonData;

  if (sections.section1.includes(selectedLesson) || sections.section2.includes(selectedLesson)) {
    const lessonInfo =
      activeSection === 'section1'
        ? lessonsInfo[selectedLesson]?.section1
        : lessonsInfo[selectedLesson]?.section2;

    if (!lessonInfo) {
      return null;
    }

    const { title, school, college, languageSkills, advancedLanguage, additionalRequirements, requirements } = lessonInfo;

    return (
      <>
        <h2 style={{ transform: 'translateY(25%)' }}>{title}</h2>
        <br />
        Generelle Krav:
        <br />
        <p className="popup-txt" style={{ marginBottom: '20px' }}>
          {school}{college}
          <br />
          <p>{languageSkills}{advancedLanguage}</p>
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



const Lessons = ({ selectedLesson, selectedBox, activeSection, handleClosePopup }) => {
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
        content={<PopupContent selectedLesson={selectedLesson} activeSection={activeSection} />}
        onClose={handleClosePopup}
      />
    );
  }

  if (selectedBox && activeSection === 'section2' && lectures.includes(selectedBox)) {
    return (
      <Popup
        content={<PopupContent selectedLesson={selectedBox} activeSection={activeSection} />}
        onClose={handleClosePopup}
      />
    );
  }

  return null;
};

export default Lessons;
