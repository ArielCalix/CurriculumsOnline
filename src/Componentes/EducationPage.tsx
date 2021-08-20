import React from 'react';
import { IEducations } from "../Interfaces/IEducations";

const education: IEducations = {
    title: 'Education',
    education: [
        {
            years: '2013 - 2015',
            title: 'Master`s Degree',
            titleName: 'Master of Information Technology',
            university: 'University of Computer Science',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
        },
        {
            years: '2009 - 2013',
            title: 'Bachelor`s Degree',
            titleName: 'Bachelor of Computer Science',
            university: 'University of Computer Science',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
        },
        {
            years: '2007 - 2009',
            title: 'High School',
            titleName: 'Science and Mathematics',
            university: 'School of Secondary board',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
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