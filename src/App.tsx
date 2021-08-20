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

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <ProfilePage />
        <AboutPage />
        <SkillPage />
        <PortfolioPage />
        <ExperiencePage />
        <EducationPage />
        <ReferencesPage />
        <ContactPage />
      </div>
      <Footer />
    </React.Fragment >
  );
}

export default App;
