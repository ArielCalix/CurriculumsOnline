import React, { useState } from 'react';
import { IReferencesPage } from "../Interfaces/IReferencesPage";

const references: IReferencesPage = {
    title: 'References',
    references: [
        {
            id: 1,
            photo: 'images/reference-image-1.jpg',
            name: 'Aiyana',
            role: 'CEO / WEBM',
            description: ['Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.']
        },
        {
            id: 2,
            photo: 'images/reference-image-2.jpg',
            name: 'Braiden',
            role: 'CEO / Creativem',
            description: ['Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.']
        },
        {
            id: 3,
            photo: 'images/reference-image-3.jpg',
            name: 'Alexander',
            role: 'CEO / Webnote',
            description: ['Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.']
        },
    ]
}

export function ReferencesPage() {
    const [nav, setNav] = useState(1)
    return <div className="section" id="reference">
        <div className="container cc-reference">
            <div className="h4 mb-4 text-center title">{references.title}</div>
            <div className="card" data-data-aos="zoom-in">
                <div className="carousel slide" id="cc-Indicators" data-data-ride="carousel" data-interval={1000}>
                    <ol className="carousel-indicators">
                        {
                            references.references.map((ref, index) => {
                                const active = (nav === ref.id)
                                return <li key={ref.id+'refers'} className={`${active}`} onClick={()=>setNav(ref.id)} data-slide-to={`${index}`}></li>
                            })
                        }
                    </ol>
                    <div className="carousel-inner">
                        {
                            references.references.map((reference, index) => {
                                const active = (nav === reference.id) ? 'active' : ''
                                return <div key={reference.id+'ref'} className={`carousel-item ${active}`}>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-3 cc-reference-header">
                                            <img src={`${reference.photo}`} alt="Img" />
                                            <div className="h5 pt-2">{`${reference.name}`}</div>
                                            <p className="category">{`${reference.role}`}</p>
                                        </div>
                                        <div className="col-lg-10 col-md-9">
                                            {
                                                reference.description.map((text, index) => {
                                                    return <p key={index+'refs'}>{text}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}