import React from 'react';
import { IExperience } from "../Interfaces/IExperience";

const experience: IExperience = {
    title: '',
    information: [
        {
            date: 'March 2016 - Present',
            place: 'CreativeM',
            role: 'Front End Developer',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
        },
        {
            date: 'April 2014 - March 2016',
            place: 'WebNote',
            role: 'Web Developer',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
        },
        {
            date: 'April 2013 - February 2014',
            place: 'WEBM',
            role: 'Intern',
            description: ['Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.']
        }
    ]
}

export function ExperiencePage() {
    return <div className="section" id="experience">
        <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">Work Experience</div>
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