import React from "react";

const lessonsInfo = {
  Tysk: {
    section1: {
      title: "Tysk",
      school: "Min. 18 år & 2.G gennemført",
      languageSkills: "Gode sprogkundskaber skriftligt og mundtligt",
      additionalRequirements: "(skal være fortsættersprog)",
    },
    section2: {
      title: "Tysk",
      college: "4. semester gennemført på fagrelevant uddannelse",
      advancedLanguage: (
        <>
          Avancerede mundtlige og skriftlige færdigheder
          <br />
          Eller anden relevant baggrund
        </>
      ),
    },
  },
  Spansk: {
    section1: {
    title: "Spansk",
    school: "Min. 18 år & 2.G gennemført",
    languageSkills: "Gode sprogkundskaber skriftligt og mundtligt",
    },
    section2: {
      title: "Spansk",
      college: "4. semester gennemført på fagrelevant uddannelse",
      advancedLanguage: (
        <>
          Avancerede mundtlige og skriftlige færdigheder
          <br />
          Eller anden relevant baggrund
        </>
      ),
    },
  },
  Engelsk: {
    section1: {
    title: "Engelsk",
    school: "Min. 18 år & 2.G gennemført",
    languageSkills: "Gode sprogkundskaber skriftligt og mundtligt",
    },
    section2: {
      title: "Engelsk",
      college: "4. semester gennemført på fagrelevant uddannelse",
      advancedLanguage: "Avancerede mundtlige og skriftlige færdigheder",
    },
  },
  Samfundsfag: {
    section1: {
    title: "Samfundsfag",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Samfundsfag",
      college: "4. semester gennemført på fagrelevant uddannelse",
    }
  },
  Matematik: {
    section1: {
    title: "Matematik",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Matematik",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },
  Fransk: {
    section1: {
    title: "Fransk",
    school: "Min. 18 år & 2.G gennemført",
    languageSkills: "Gode sprogkundskaber skriftligt og mundtligt",
    },
    section2: {
      title: "Fransk",
      college: "4. semester gennemført på fagrelevant uddannelse",
      advancedLanguage: (
        <>
          Avancerede mundtlige og skriftlige færdigheder
          <br />
          Eller anden relevant baggrund
        </>
      ),
    },
  },
  Dansk: {
    section1: {
      title: "Dansk",
      school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Dansk",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Biologi: {
    section1: {
    title: "Biologi",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Biologi",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Bioteknologi: {
    section2: {
    title: "Bioteknologi",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Kemi: {
    section2: {
    title: "Kemi",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Naturgeografi: {
    section2: {
    title: "Naturgeografi",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Programmering: {
    section2: {
    title: "Programmering",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Psykologi: {
    section2: {
    title: "Psykologi",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Historie: {
    section1: {
    title: "Historie",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Historie",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },
  "Dansk som andetsprog": {
    section1: {
    title: "Dansk som andetsprog",
    requirements: (
      <>
        Læreruddannet med DSA kendskab
        <br />
        Ba i Dansk
        <br />
        Ba i nordisk sprog og litt.
        <br />
        Ba i Lingvistik
        <br />
        Ba i Retorik
        <br />
        Eller anden relevant baggrund
      </>
    ),
    }
  },
  "Natur/Teknologi": {
    section1: {
    title: "Natur/Teknologi",
    school: "Min. 18 år & 2.G gennemført",
    }
  },
  "Fysik/Kemi": {
    section1: {
    title: "Natur/Teknologi",
    school: "Min. 18 år & 2.G gennemført",
    }
  },

  Religion: {
    section2: {
    title: "Religion",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Fysik: {
    section2: {
    title: "Fysik",
    college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },

  Idræt: {
    section1: {
    title: "Idræt",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Idræt",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },
  Musik: {
    section1: {
    title: "Musik",
    school: "Min. 18 år & 2.G gennemført",
    requirements: (
      <>
        Grundlæggende musisk forståelse
        <br />
        Eller anden relevant baggrund
      </>
    ),
    },
    section2: {
      title: "Musik",
      college: "4. semester gennemført på fagrelevant uddannelse",
      advancedLanguage: (
        <>
        Avancerede mundtlige og skriftlige færdigheder
        <br/>
        Eller anden relevant baggrund
        </>
      ),
    },
  },
  Billedkunst: {
    section1: {
    title: "Billedkunst",
    school: "Min. 18 år & 2.G gennemført",
    requirements: <>Eller anden relevant baggrund</>,
    }
  },

  "Kost & Motion": {
    section3: {
    title: "Kost & Motion",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Idræt, Fysioterapi, Ergoterapi, Medicin, Sygepleje, ernæring & Sundhed m.v.
      </>
    ),
    }
  },

  "Social Trivsel": {
    section3: {
    title: "Social Trivsel",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Psykisk Trivsel": {
    section3: {
    title: "Psykisk Trivsel",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Fysisk Trivsel": {
    section3: {
    title: "Fysisk Trivsel",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Idræt, Fysioterapi, Ergoterapi, Medicin, Sygepleje m.v.
      </>
    ),
    }
  },

  "Håndtering af angst": {
    section3: {
    title: "Håndtering af angst",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Psykologi, Pædagogik m.v.
        <br/>
        Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Digital Dannelse": {
    section3: {
    title: "Digital Dannelse",
    requirements: "4. semester gennemført på fagrelevant uddannelse"
    }
  },

  "Hjælp til venskaber": {
    section3: {
    title: "Hjælp til venskaber",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Misbrug og afhængighed": {
    section3: {
    title: "Misbrug og afhængighed",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Misbrugskonsulent, Psykologi, Socialrådgiver, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Hjælp til ADHD og ADD": {
    section3: {
    title: "Hjælp til ADHD og ADD",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Støtte til højt begavede": {
    section3: {
    title: "Støtte til højt begavede",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    additionalRequirements: "Kræver indgående kendskab til HB"
    }
  },

  "Søvnudfordringer": {
    section3: {
    title: "Søvnudfordringer",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Psykologi, medicin, fysioterapi eller anden relevant baggrund
      </>
    ),
    }
  },

  "Seksualundervisning": {
    section3: {
    title: "Seksualundervisning",
    requirements: (
      <>
      4. semester gennemført på fagrelevant uddannelse
      <br/>
      Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse med seksualvejledning, Psykoterapeut, Fysioterapeut, Sygepleje eller anden relevant baggrund
      </>
    ),
    }
  },

  "Uddannelsesvejledning": {
    section3: {
    title: "Uddannelsesvejledning",
    requirements: (
      <>
      4. semester gennemført på fagrelevant uddannelse
        <br />
        Eks. Uddannelsesvidenskab, Socialrådgiver, Læreruddannelse m.v.
      </>
    ),
    }
  },

  "Stresshåndtering": {
    section3: {
    title: "Stresshåndtering",
    requirements: (
      <>
        4. semester gennemført på fagrelevant uddannelse
        <br />
        Psykologi, Medicin, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Skolevægring": {
    section3: {
    title: "Skolevægring",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  "Uddannelsesparathed": {
    section3: {
    title: "Uddannelsesparathed",
    requirements: (
      <>
        Ba i relevant uddannelsesretning
        <br />
        Eks. Professionsbachelor i pædagogik, Psykologi, Socialrådgiver, Læreruddannelse, Psykoterapeut eller anden relevant baggrund
      </>
    ),
    }
  },

  Kristendomskundskab: {
    section1: {
    title: "Kristendomskundskab",
    school: "Min. 18 år & 2.G gennemført",
    }
  },
  Geografi: {
    section1: {
    title: "Geografi",
    school: "Min. 18 år & 2.G gennemført",
    },
    section2: {
      title: "Geografi",
      college: "4. semester gennemført på fagrelevant uddannelse",
    },
  },
};

export default lessonsInfo;