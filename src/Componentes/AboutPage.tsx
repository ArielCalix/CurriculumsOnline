import React from 'react';
import { IAboutPage } from "../Interfaces/IAboutPage";

const aboutInfo: IAboutPage = {
    resume: {
        title: 'Acerca de',
        description: [
            'Hola! Soy Ariel Cálix. Desarrollador Web, Diseñador de Interfaces Amigables y Analista de Datos.',
            'Soy una persona que le gusta la tecnológia y el desarrollo de software.',
            'Me especializo en el análisis de datos, en desarrollo de software y diseño de interfaces.'
        ],
        link: {
            url: 'https://templateflip.com/templates/creative-cv/',
            text: 'Ver más'
        }
    },
    basicInformation: {
        title: 'Informacion básica',
        items: [
            {
                title: 'Correo',
                content: 'acalixvasquez@gmail.com',
            },
            {
                title: 'Teléfono',
                content: '(504) 9767-0648',
            },
            {
                title: 'Direción',
                content: 'Col. Nueva Esperanza 25mts',
            }, {
                title: 'Edad',
                content: '29'
            }
        ]
    }
}

export function AboutPage() {
    return <div className="section" id="about">
        <div className="container">
            <div className="card" data-data-aos="fade-up" data-data-aos-offset="10">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">{aboutInfo.resume.title}</div>
                            {
                                aboutInfo.resume.description.map((string, index) => {
                                    return <p key={index}>{string}</p>
                                })
                            }
                            <a href={aboutInfo.resume.link.url}>{aboutInfo.resume.link.text}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">{aboutInfo.basicInformation.title}</div>
                            {
                                aboutInfo.basicInformation.items.map(item => {
                                    return <div key={item.title} className="row">
                                        <div className="col-sm-4"><strong className="text-uppercase">{item.title}</strong></div>
                                        <div className="col-sm-8">{item.content}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}