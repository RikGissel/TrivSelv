import React, { useState } from 'react';
import Lessons from '../data/lessons';
import sectionData from '../json/sectionData';
import '../css/main.css';

const ContentSwitcher = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [selectedLesson, setselectedLesson] = useState('');

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
    setselectedLesson('');
  };

  const handleLanguageClick = (language, className) => {
    setselectedLesson(language);
  };

  const handleClosePopup = () => {
    setselectedLesson('');
  };

  const getSectionLabel = (sectionName) => {
    switch (sectionName) {
      case 'section1':
        return 'Grundskole';
      case 'section2':
        return 'Gymnasie';
      case 'section3':
        return 'Trivsel';
      default:
        return '';
    }
  };

  return (
    <div className="lessons-container">
      <div className="lessons-wrapper">
        <h1 className="lessons-heading">Fagområder</h1>
        <h4 className="lessons-subheading">Vi søger Boostere indenfor følgende fagområder</h4>
        <div className='lessons-main__wrapper'>
          {Object.keys(sectionData).map((sectionName) => (
            <button
              className={`lessons__btn-${sectionName.slice(-1)}`}
              onClick={() => handleButtonClick(sectionName)}
              key={sectionName}
            >
              {getSectionLabel(sectionName)}
            </button>
          ))}

          {activeSection && sectionData[activeSection] && (
            <div className={`lesson-section__${activeSection.slice(-1)}`}>
              {sectionData[activeSection].map((language, index) => (
                <div
                  className={`box-${activeSection.slice(-1)}`}
                  onClick={() => handleLanguageClick(language, `box-${activeSection.slice(-1)}`)}
                  key={index}
                >
                  {language}
                </div>
              ))}
            </div>
          )}

          {/* Replace the existing Popups with YourComponent */}
          <Lessons
            selectedLesson={selectedLesson}
            activeSection={activeSection}
            handleClosePopup={handleClosePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSwitcher;
