import React from 'react';

const aboutInfo = {
    resume: {
        title: 'Acerca de',
        strings: [
            'Hello! I am Anthony Barnett.Web Developer, Graphic Designer and Photographer.',
            'Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience.',
            'Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio.'
        ],
        link: {
            url: 'https://templateflip.com/templates/creative-cv/',
            text: 'Learn More'
        }
    },
    basicInformation: {
        title: 'Informacion básica',
        items: [
            {
                title: 'email',
                content: 'acalixvasquez@gmail.com',
            },
            {
                title: 'phone',
                content: '(504) 9767-0648',
            },
            {
                title: 'address',
                content: 'Col. Nueva Esperanza 25mts',
            }, {
                title: 'Age',
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
                                aboutInfo.resume.strings.map(string => {
                                    return <p>{string}</p>
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
                                    return <div className="row">
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