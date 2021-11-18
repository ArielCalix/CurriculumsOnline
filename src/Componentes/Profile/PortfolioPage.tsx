import React, { useState } from 'react';
import { IPortfolio, ITabPane, IRowPane, IColumn } from "../../Interfaces/IPortfolio";

const portfolio: IPortfolio = {
    title: 'Portafolio',
    tabs: [
        { id: 1, icon: 'laptop', link: '#web-development' },
        { id: 2, icon: 'picture-o', link: '#graphic-design' },
        { id: 3, icon: 'camera', link: '#Photography-design' },
    ],
    tabPanes: [
        {
            row: {
                columns: [
                    { imagen: 'images/project-1.jpg', title: 'Imagen 1', subTitle: 'Imagen 1' },
                    { imagen: 'images/project-2.jpg', title: 'Startup Project', subTitle: 'Web Development' },
                    { imagen: 'images/project-3.jpg', title: 'Food Order Project', subTitle: 'Web Development' },
                    { imagen: 'images/project-4.jpg', title: 'Web Advertising Project', subTitle: 'Web Development' },
                ]
            }
        },
        {
            row: {
                columns: [
                    { imagen: 'images/graphic-design-1.jpg', title: '', subTitle: 'Graphic Design' },
                    { imagen: 'images/graphic-design-2.jpg', title: 'Abstract Umbrella', subTitle: 'Graphic Design' },
                    { imagen: 'images/graphic-design-3.jpg', title: 'Cube Surface Texture', subTitle: 'Graphic Design' },
                    { imagen: 'images/graphic-design-4.jpg', title: 'Abstract Line', subTitle: 'Graphic Design' },
                ]
            }
        },
        {
            row: {
                columns: [
                    { imagen: 'images/photography-1.jpg', title: 'Photoshoot', subTitle: 'Photography' },
                    { imagen: 'images/photography-2.jpg', title: 'Wedding Photoshoot', subTitle: 'Photography' },
                    { imagen: 'images/photography-3.jpg', title: 'Beach Photoshoot', subTitle: 'Photography' },
                    { imagen: 'images/photography-4.jpg', title: 'Nature Photoshoot', subTitle: 'Photography' },
                ]
            }
        }
    ]
}

export function PortfolioPage() {
    const [activePane, setActivePane] = useState<number>(1);
    return <div className="section" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                    <div className="h4 text-center mb-4 title">{portfolio.title}</div>
                    <div className="nav-align-center">
                        <ul className="nav nav-pills nav-pills-primary" role="tablist">
                            {
                                portfolio.tabs.map((tab) => {
                                    const activo = (activePane === tab.id) ? 'active' : '';
                                    return <li key={tab.id+'pt'} className="nav-item">
                                        <a className={`nav-link ${activo}`} href='#a' data-toggle="tab" onClick={() => setActivePane(tab.id)} role="tablist">
                                            <i className={`fa fa-${tab.icon}`} data-aria-hidden="true"></i></a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tab-content gallery mt-5">
                {
                    portfolio.tabPanes.map((tabPane, index) => {
                        const active = (activePane === (index + 1)) ? 'active' : '';
                        return <TabPanes key={index+'tp'} active={active} row={tabPane.row} />
                    })
                }
            </div>
        </div>
    </div>
}

function TabPanes(tabPane: ITabPane) {
    return <div className={`tab-pane ${tabPane.active}`} id="web-development">
        <div className="ml-auto mr-auto">
            <TabRows key={tabPane.active+'ttp'} columns={tabPane.row.columns} />
        </div>
    </div>
}

function TabRows(row: IRowPane) {
    return <div className="row">
        {
            row.columns.map(column => {
                return <div key={column.title} className="col-md-6">
                    <Columns  imagen={column.imagen} title={column.title} subTitle={column.subTitle} />
                </div>
            })
        }
    </div>
}

function Columns(column: IColumn) {
    return <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom">
        <a href="#web-development">
            <figure className="cc-effect"><img src={`${column.imagen}`} alt="imgg" />
                <figcaption>
                    <div className='h4'>{column.title}</div>
                    <p>{column.subTitle}</p>
                </figcaption>
            </figure>
        </a>
    </div>
}