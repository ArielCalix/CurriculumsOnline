import React from 'react';
import { IExperience } from "../Interfaces/IExperience";

const experience: IExperience = {
    title: 'Experiencia',
    information: [
        {
            date: 'Septiembre 2019 - Julio 2021',
            place: 'Banco Central de Honduras',
            role: 'Técnico Informático',
            description: ['Encargado de desarrollos de los elementos Web de la página principal del Banco Central de Honduras, Trabajo con reportes de cada uno de los departamentos, mantenimiento de servidores e innovaciones relacionadas a la exposición de datos.']
        },
        {
            date: 'Julio 2021 - Actualidad',
            place: 'ITS - Banco Davivienda',
            role: 'Analista Programador',
            description: ['Encargado de desarrollo de Micro Servicios, mantenimiento a código y mejora.']
        }
    ]
}

export function ExperiencePage() {
    return <div className="section" id="experience">
        <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">{experience.title}</div>
            {experience.information.map(info => {
                return <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-data-aos="fade-right" data-data-aos-offset="50" data-data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>{info.date}</p>
                                <div className="h5">{info.place}</div>
                            </div>
                        </div>
                        <div className="col-md-9" data-data-aos="fade-left" data-data-aos-offset="50" data-data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">{info.role}</div>
                                {info.description.map(text => {
                                   return <p>{text}</p>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}