import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import Button from '../commons/core/Button';
import Inputs from '../commons/core/Inputs';
import styles from '../../styles/styles.module.css';

export default function NavBar() {
    const [data, setData] = useState<string>('');
    const buttonClick = () => {
        window.alert('Hola desde el evento Click')
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
    }
    return <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
        <a className='navbar-brand' href='https://www.google.com'>Navbar</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' data-aria-controls='navbarSupportedContent' data-aria-expanded='false' data-aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <a className='nav-link' href='https://www.google.com'>Home <span className='sr-only'>(current)</span></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='https://www.google.com'>Link</a>
                </li>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='https://www.google.com' id='navbarDropdown' role='button' data-toggle='dropdown' data-aria-expanded='false'>
                        Dropdown
                    </a>
                    <div className='dropdown-menu' data-aria-labelledby='navbarDropdown'>
                        <a className='dropdown-item' href='https://www.google.com'>Action</a>
                        <a className='dropdown-item' href='https://www.google.com'>Another action</a>
                        <div className='dropdown-divider'></div>
                        <a className='dropdown-item' href='https://www.google.com'>Something else here</a>
                    </div>
                </li>
                <li className='nav-item'>
                    <a className='nav-link disabled' href='https://www.google.com'>Disabled</a>
                </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
                <Inputs onChange={onChange} name='Search' type='search' placeHolder='Que desea buscar' value={data}
                    styleInputs='colorDarkAccent' />
                {/* <input className='form-control mr-sm-2' type='search' placeholder='Search' data-aria-label='Search' /> */}
                <Button onClick={buttonClick} type='submit' name={'search'} buttonStyle='colorInfo' ></Button>
                {/* <button className={`btn btn-outline-success my-2 my-sm-0 `} type='submit'>Search</button> */}
            </form>
        </div>
    </nav>
}