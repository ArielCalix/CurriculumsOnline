import React from 'react';

const personalInformation = {
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

export function ProfilePage() {
    return <div className="profile-page">
        <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
                <div className="page-header-image" data-data-parallax="true" style={{ backgroundImage: 'url(' + 'images/cc-bg-1.jpg' + ')' }}></div>
                <div className="container">
                    <div className="content-center">
                        <div className="cc-profile-image"><a href="#"><img src={personalInformation.photo} alt="Image" /></a></div>
                        <div className="h2 title">{personalInformation.nombre}</div>
                        <p className="category text-white">{personalInformation.capabillities}</p>
                        <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-data-aos="zoom-in" data-data-aos-anchor="data-data-aos-anchor">{personalInformation.buttonHire}</a>
                        <a className="btn btn-primary" href="#" data-data-aos="zoom-in" data-data-aos-anchor="data-data-aos-anchor">{personalInformation.buttonCv}</a>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="button-container">
                            {
                                personalInformation.socialMedia.map((social,index) => {
                                    return <a key={index} className="btn btn-default btn-round btn-lg btn-icon" href={social.link} rel="tooltip" title={`Follow me on ${social.socialName}`}><i className={`fa fa-${social.icon}`}></i></a>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}