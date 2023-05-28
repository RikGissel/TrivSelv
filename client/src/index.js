import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Components */
import Nav from './components/Nav';
import Landing from './components/landing';
import Content from './components/content';
import Banner from './components/banner';
import Footer from './components/Footer.js';

import reportWebVitals from './reportWebVitals';
import ContentSwitcher from './components/PopupMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Nav />

  <Landing 
    landIMG={process.env.PUBLIC_URL + '/land-img.jpg'}
    landHeader={"Vil du gøre en meningsfuld forskel for børn & unge?"}
    landText={"Din indsats vil være med til at skabe forskel og mening for børn & unge, nu og i fremtiden. En forskel, der gør vores arbejde meningsfuldt. Hos TrivSelv bliver du en del af et større fællesskab. Et fællesskab med et fælles mål – trivsel!"}
    />

  <Content 
    className={"first-content-section"}
    imageSrc={process.env.PUBLIC_URL + '/content-1.jpg'}
    header={"Alle kan noget særligt"}
    text1={"Vi tilbyder ikke kun undervisning og faglig støtte, men også trivselsstøtte, der fokuserer på den personlige udvikling af hvert enkelt barn og ung. Vi faciliterer desuden spændende undervisningsdage til skoler og foreninger, som bliver varetaget af vores fantastiske BOOSTERE."}
    text2={"Som BOOSTER hos TrivSelv får du muligheden for at udfolde dig inden for det, du er bedst til. Dette sikrer, at vi kan tilbyde kvalitet og nærvær i en bred vifte af muligheder, hvor du kan vælge at arbejde med undervisning i grundskole- og gymnasiefag, personlig og social trivsel eller en kombination af begge. Der er mange muligheder, hvis du brænder ligesom os for at gøre en forskel for andre."}
    text3={"Vi er skabt for at gøre en uvurderlig forskel. Derfor søger vi engagerede og passionerede BOOSTERE, der ønsker at inspirere andre og gøre en betydelig forskel i livet for dem, der har brug for vores hjælp. Lad os sammen skabe en positiv forandring i verden."}
    btnText={"Fagområder"}
  />

  <Content 
    className={"second-content-section"}
    imageSrc={process.env.PUBLIC_URL + '/content-2.jpg'}
    header={"For os er trivsel alt - også din!"}
    text1={"Vi skaber trivsel hos børn & unge gennem en holistisk og anerkendende tilgang i hele vores virke. Vi tror på, at din trivsel er lige så betydningsfuld som det, du gør for andre. Vi forstår os på, hvor vigtigt din tid er. Derfor tilbyder vi høj grad af fleksibilitet og sparring, mens du gør det, du er bedst til – og samtidig styrker din egen faglighed."}
    text2={"Vi er nysgerrig på dig og sætter pris på dine kompetencer. Vi tilbyder dig som BOOSTER, muligheden for at styrke din egen personlige udvikling mens vi i fællesskab gør en værdifuld forskel for børn og unge. At være en del af TrivSelv betyder at være en del af noget større."}
    text3={"For os er det ikke et krav, at du har undervisningserfaring. Du skal dog være fyldt 18 år, være i gang med – eller have færdiggjort din ungdomsuddannelse samt kunne fremvise ren Straffe- og Børneattest."}
    btnText={"Skriv til os"}
    secondButtonClass="apply-button"
  />

  <Banner
     type="images" images={[process.env.PUBLIC_URL + '/banner-1.jpg', process.env.PUBLIC_URL + '/banner-2.jpg', process.env.PUBLIC_URL + '/banner-3.jpg']} 
     texts={['Et job med mening - og ikke bare for dig selv', 'Styrk din faglighed mens du gør en forskel', 'Tilrettelæg din egen arbejdstid - til en konkurrencedygtig løn']}
     />

    <ContentSwitcher/>

    <Banner type="text" text1="”… en vision om at alle børn får den hjælp og støtte, de har brug for, til at kunne realisere deres fulde potentiale”" text2="- TrivSelv" /> 

<Content 
    className={"first-content-section"}
    imageSrc={process.env.PUBLIC_URL + '/content-1.jpg'}
    header={"Alle kan noget særligt"}
    text1={"Vi tilbyder ikke kun undervisning og faglig støtte, men også trivselsstøtte, der fokuserer på den personlige udvikling af hvert enkelt barn og ung. Vi faciliterer desuden spændende undervisningsdage til skoler og foreninger, som bliver varetaget af vores fantastiske BOOSTERE."}
    text2={"Som BOOSTER hos TrivSelv får du muligheden for at udfolde dig inden for det, du er bedst til. Dette sikrer, at vi kan tilbyde kvalitet og nærvær i en bred vifte af muligheder, hvor du kan vælge at arbejde med undervisning i grundskole- og gymnasiefag, personlig og social trivsel eller en kombination af begge. Der er mange muligheder, hvis du brænder ligesom os for at gøre en forskel for andre."}
    text3={"Vi er skabt for at gøre en uvurderlig forskel. Derfor søger vi engagerede og passionerede BOOSTERE, der ønsker at inspirere andre og gøre en betydelig forskel i livet for dem, der har brug for vores hjælp. Lad os sammen skabe en positiv forandring i verden."}
    btnText={"Fagområder"}
  />


   <Content 
    className={"second-content-section"}
    imageSrc={process.env.PUBLIC_URL + '/content-3.jpg'}
    header={"Om os"}
    text1={"Bag TrivSelv står Thomas & Mathias, der begge arbejder som folkeskolelærere i Aarhus kommune. Thomas kommer fra en lang karriere som professionel badmintontræner og Mathias fra en karriere i forsvaret. Til dagligt arbejder de både i almen og specialpædagogisk regi samt AKT på Tilst skole."}
    text2={"Vores erfaringer som skolelærere i den danske folkeskole viser, at der eksisterer et stigende behov for opmærksomhed på det enkelte barn & ung. Et behov, der kan være svært at imødekomme i en hektisk hverdag. Vi adskiller os fra andre mentorvirksomheder på vores holistiske syn på trivsel. Hos os møder faglig, personlig og social trivsel hinanden."}
    text3={"Hos TrivSelv har vi en vision om at alle børn får den hjælp og støtte, de har brug for, til at kunne realisere deres fulde potentiale. At alle børn kommer til at opleve en meningsgivende hverdag med skoleglæde, gode kammerater og en følelse af succes."}
    btnText={"Skriv til os"}
    secondButtonClass="apply-button"
  />

  <App />
  
  <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
