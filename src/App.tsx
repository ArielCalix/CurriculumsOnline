import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './Componentes/Header';
import { ProfilePage } from './Componentes/ProfilePage';
import { AboutPage } from './Componentes/AboutPage';
import { SkillPage } from './Componentes/SkillPage';
import { PortfolioPage } from './Componentes/PortfolioPage';
import { ExperiencePage } from './Componentes/ExperiencePage';
import { EducationPage } from './Componentes/EducationPage';
import { ReferencesPage } from './Componentes/ReferencesPage';
import { ContactPage } from './Componentes/ContactPage';
import { Footer } from "./Componentes/Footer";
import { IPersonalInformation } from './Interfaces/IPersonalInformation';

const personalInformation: IPersonalInformation = {
  nombre: 'Ariel Antonio Calix Vasquez',
  capabillities: 'Desarrollador Web, Desarrollador de Apps, UX',
  buttonHire: 'Contratame',
  buttonCv: 'Descargar',
  photo: 'images/ArielCalix.jpg',
  socialMedia: [
    {
      socialName: 'Twitter',
      icon: 'twitter',
      link: 'https://www.google.com'
    },
    {
      socialName: 'Instagram',
      icon: 'instagram',
      link: 'https://www.google.com'
    },
    {
      socialName: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.google.com'
    },
    {
      socialName: 'GitHub',
      icon: 'github',
      link: 'https://www.google.com'
    },
  ]
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <ProfilePage
          nombre={personalInformation.nombre}
          capabillities={personalInformation.capabillities}
          buttonHire={personalInformation.buttonHire}
          buttonCv={personalInformation.buttonCv}
          photo={personalInformation.photo}
          socialMedia={personalInformation.socialMedia} />
        <AboutPage />
        <SkillPage />
        <PortfolioPage />
        <ExperiencePage />
        <EducationPage />
        <ReferencesPage />
        <ContactPage />
      </div>
      <Footer nombre={personalInformation.nombre} socialMedia={personalInformation.socialMedia} />
    </React.Fragment >
  );
}

export default App;
