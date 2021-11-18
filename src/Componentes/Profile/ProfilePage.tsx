import React from 'react';
import { IPersonalInformation } from "../../Interfaces/IPersonalInformation";

export function ProfilePage(props: IPersonalInformation) {
    return <div className="profile-page">
        <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
                <div className="page-header-image" data-data-parallax="true"
                    style={{ backgroundImage: 'url(images/cc-bg-1.jpg)' }}></div>
                <div className="container">
                    <div className="content-center">
                        <div className="cc-profile-image">
                            <a href="#a">
                                <img src={props.photo} alt="imgg" />
                            </a>
                        </div>
                        <div className="h2 title">{props.nombre}</div>
                        <p className="category text-white">{props.capabillities}</p>
                        <a className="btn btn-primary smooth-scroll mr-2"
                            href="#contact" data-data-aos="zoom-in"
                            data-data-aos-anchor="data-data-aos-anchor">{props.buttonHire}</a>
                        <a className="btn btn-primary" href="#a" data-data-aos="zoom-in"
                            data-data-aos-anchor="data-data-aos-anchor">{props.buttonCv}</a>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="button-container">
                            {
                                props.socialMedia.map((social,index) => {
                                    return <a key={index} className="btn btn-default btn-round btn-lg btn-icon"
                                        href={social.link} rel="tooltip" title={`Follow me on ${social.socialName}`}>
                                        <i className={`fa fa-${social.icon}`}></i></a>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}