import React from 'react';

const menu = {
    brandName: 'Ariel Calix Space',
    pages: [
        {
            text: 'About',
            url: '#about'
        },
        {
            text: 'Skills',
            url: '#skills'
        },
        {
            text: 'Portfolio',
            url: '#portfolio'
        },
        {
            text: 'Experience',
            url: '#experience'
        },
        {
            text: 'Contact',
            url: '#contact'
        }]
}

export function Header() {
    return <header>
        <div className="profile-page sidebar-collapse">
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="#a" rel="tooltip">{`${menu.brandName}`}</a>
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" data-aria-controls="navigation" data-aria-expanded="false" data-aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul className="navbar-nav">
                            {
                                menu.pages.map(item => {
                                    return <li className="nav-item">
                                        <a className="nav-link smooth-scroll" href={`${item.url}`}>{item.text}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
}