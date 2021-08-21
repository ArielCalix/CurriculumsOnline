import React from 'react';
import { IEducations } from "../Interfaces/IEducations";

const education: IEducations = {
    title: 'Estudios Realizados',
    education: [
        {
            years: '2015 - 2018',
            title: 'Ingenieria en Ciencias Computacionales',
            titleName: 'Ingeniero en Ciencias de la Computación',
            university: 'Universidad Católica de Honduras',
            description: ['Título obtenido de Ingeniería en Ciencias de la Computación en la Universidad Católica de Honduras en el año 2018.']
        },
        {
            years: '2020 - 2021',
            title: 'Analisis de Datos',
            titleName: 'Analista de Datos',
            university: 'New Horizons Honduras',
            description: ['Analisis de datos utilizando power bi, creación de ETL y sets de Datos.']
        },
    ]
}

export function EducationPage() {
    return <div className="section">
        <div className="container cc-education">
            <div className="h4 text-center mb-4 title">{education.title}</div>
            {
                education.education.map(educ => {
                    return <div className="card">
                        <div className="row">
                            <div className="col-md-3 bg-primary" data-data-aos="fade-right" data-data-aos-offset="50" data-data-aos-duration="500">
                                <div className="card-body cc-education-header">
                                    <p>{educ.years}</p>
                                    <div className="h5">{educ.title}</div>
                                </div>
                            </div>
                            <div className="col-md-9" data-data-aos="fade-left" data-data-aos-offset="50" data-data-aos-duration="500">
                                <div className="card-body">
                                    <div className="h5">{educ.titleName}</div>
                                    <p className="category">{educ.university}</p>
                                    {educ.description.map(text => { return <p>{text}</p> })}
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}