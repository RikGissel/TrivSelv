import React from "react";
import jsonData from "../json/sectionData.json";
import lessonsInfo from "./lessonInfo";

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

  if (
    sections.section1.includes(selectedLesson) ||
    sections.section2.includes(selectedLesson) ||
    sections.section3.includes(selectedLesson)
  ) {
    const lessonInfo =
      activeSection === "section1"
        ? lessonsInfo[selectedLesson]?.section1
        : activeSection === "section2"
        ? lessonsInfo[selectedLesson]?.section2
        : lessonsInfo[selectedLesson]?.section3;

    if (!lessonInfo) {
      return null;
    }

    const {
      title,
      school,
      college,
      languageSkills,
      advancedLanguage,
      additionalRequirements,
      requirements,
    } = lessonInfo;

    return (
      <>
        <h2 style={{ transform: "translateY(25%)" }}>{title}</h2>
        <br />
        Generelle Krav:
        <br />
        <p className="popup-txt">
          {school}
          {college}
          {requirements && <p className="popup-txt">{requirements}</p>}
          <p>
            {languageSkills}
            {advancedLanguage}
          </p>
        </p>
        {additionalRequirements && (
          <>
            <p style={{ marginTop: "20px" }}>Evt. særlige krav:</p>
            <p className="popup-txt">{additionalRequirements}</p>
          </>
        )}
      </>
    );
  }

  return null;
};

const Lessons = ({
  selectedLesson,
  selectedBox,
  activeSection,
  handleClosePopup,
}) => {
  const lectures = [
    "Tysk",
    "Spansk",
    "Engelsk",
    "Samfundsfag",
    "Matematik",
    "Fransk",
    "Dansk",
    "Biologi",
    "Bioteknologi",
    "Historie",
    "Programmering",
    "Naturgeografi",
    "Kemi",
    "Psykologi",
    "Dansk som andetsprog",
    "Natur/Teknologi",
    "Fysik/Kemi",
    "Fysik",
    "Religion",
    "Idræt",
    "Musik",
    "Billedkunst",
    "Kristendomskundskab",
    "Geografi",
    "Kost & Motion",
    "Social Trivsel",
    "Psykisk Trivsel",
    "Fysisk Trivsel",
    "Håndtering af angst",
    "Digital Dannelse",
    "Hjælp til venskaber",
    "Misbrug og afhængighed",
    "Hjælp til ADHD og ADD",
    "Støtte til højt begavede",
    "Søvnudfordringer",
    "Seksualundervisning",
    "Uddannelsesvejledning",
    "Stresshåndtering",
    "Skolevægring",
    "Uddannelsesparathed",
  ];

  if (
    selectedLesson &&
    activeSection === "section1" &&
    lectures.includes(selectedLesson)
  ) {
    return (
      <Popup
        content={
          <PopupContent
            selectedLesson={selectedLesson}
            activeSection={activeSection}
          />
        }
        onClose={handleClosePopup}
      />
    );
  }

  if (
    selectedBox &&
    activeSection === "section2" &&
    lectures.includes(selectedBox)
  ) {
    return (
      <Popup
        content={
          <PopupContent
            selectedLesson={selectedBox}
            activeSection={activeSection}
          />
        }
        onClose={handleClosePopup}
      />
    );
  }

  if (
    selectedLesson &&
    activeSection === "section3" &&
    lectures.includes(selectedLesson)
  ) {
    return (
      <Popup
        content={
          <PopupContent
            selectedLesson={selectedLesson}
            activeSection={activeSection}
          />
        }
        onClose={handleClosePopup}
      />
    );
  }

  return null;
};

export default Lessons;