import React, { Component} from "react";
import './header.css';
import Logo from '../../img/Logo.png';

import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="container">
                    <a className='header-logo' href="/">
                        <img src={Logo} alt="project-logo" />
                    </a>
                    <nav className='menu'>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                                </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </header>
            
        );
    }
}