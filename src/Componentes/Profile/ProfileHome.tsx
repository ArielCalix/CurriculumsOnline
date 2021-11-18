import React, { Fragment } from "react";
import { Header } from './Header';
import { ProfilePage } from './ProfilePage';
import { AboutPage } from './AboutPage';
import { SkillPage } from './SkillPage';
import { PortfolioPage } from './PortfolioPage';
import { ExperiencePage } from './ExperiencePage';
import { EducationPage } from './EducationPage';
import { ReferencesPage } from './ReferencesPage';
import { ContactPage } from './ContactPage';
import { Footer } from "./Footer";
import { IPersonalInformation } from '../../Interfaces/IPersonalInformation';

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

export default function HomeProfile() {
    return <Fragment>
        <Header/>
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
    </Fragment>
}