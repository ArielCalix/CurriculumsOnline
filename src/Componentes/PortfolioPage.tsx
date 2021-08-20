import React, { useState } from 'react';
import { Tabs, Tab } from "react-bootstrap";
const portfolio = {
    title: 'Portafolio',
    tabs: [
        { id: 1, icon: 'laptop', link: '#web-development' },
        { id: 2, icon: 'picture-o', link: '#graphic-design' },
        { id: 3, icon: 'camera', link: '#Photography-design' },
    ],
    rows: [
        {}
    ],

}

export function PortfolioPage() {
    const [activePane, setActivePane] = useState<number>(0);
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
                                    return <li className="nav-item"><a className={`nav-link ${activo}`} data-toggle="tab" onClick={() => setActivePane(1)} href={`${tab.link}`} role="tablist"><i className={`fa fa-${tab.icon}`} data-aria-hidden="true"></i></a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                    <div className="ml-auto mr-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#web-development">
                                    <figure className="cc-effect"><img src="images/project-1.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Recent Project</div>
                                            <p>Web Development</p>
                                        </figcaption>
                                    </figure></a></div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#web-development">
                                    <figure className="cc-effect"><img src="images/project-2.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Startup Project</div>
                                            <p>Web Development</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#web-development">
                                    <figure className="cc-effect"><img src="images/project-3.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Food Order Project</div>
                                            <p>Web Development</p>
                                        </figcaption>
                                    </figure></a></div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#web-development">
                                    <figure className="cc-effect"><img src="images/project-4.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Web Advertising Project</div>
                                            <p>Web Development</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="graphic-design" role="tabpanel">
                    <div className="ml-auto mr-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom">
                                    <a href="#graphic-design">
                                        <figure className="cc-effect"><img src="images/graphic-design-1.jpg" alt="Image" />
                                            <figcaption>
                                                <div className="h4">Triangle Pattern</div>
                                                <p>Graphic Design</p>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                                    <figure className="cc-effect"><img src="images/graphic-design-2.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Abstract Umbrella</div>
                                            <p>Graphic Design</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                                    <figure className="cc-effect"><img src="images/graphic-design-3.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Cube Surface Texture</div>
                                            <p>Graphic Design</p>
                                        </figcaption>
                                    </figure></a></div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#graphic-design">
                                    <figure className="cc-effect"><img src="images/graphic-design-4.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Abstract Line</div>
                                            <p>Graphic Design</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="Photography" role="tabpanel">
                    <div className="ml-auto mr-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#Photography">
                                    <figure className="cc-effect"><img src="images/photography-1.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Photoshoot</div>
                                            <p>Photography</p>
                                        </figcaption>
                                    </figure></a></div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#Photography">
                                    <figure className="cc-effect"><img src="images/photography-3.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Wedding Photoshoot</div>
                                            <p>Photography</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                            <div className="col-md-6">
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#Photography">
                                    <figure className="cc-effect"><img src="images/photography-2.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Beach Photoshoot</div>
                                            <p>Photography</p>
                                        </figcaption>
                                    </figure></a></div>
                                <div className="cc-porfolio-image img-raised" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom"><a href="#Photography">
                                    <figure className="cc-effect"><img src="images/photography-4.jpg" alt="Image" />
                                        <figcaption>
                                            <div className="h4">Nature Photoshoot</div>
                                            <p>Photography</p>
                                        </figcaption>
                                    </figure></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Row() {
    return
}

function Column() {
    return
}

function ControlledTabs() {
    return (
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Home">
                <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Sonnet2 />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
            </Tab>
        </Tabs>
    );
}

function Sonnet() {
    return <p>Test</p>
}

function Sonnet2() {
    return <p>Alfa</p>
}