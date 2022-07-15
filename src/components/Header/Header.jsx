import React, { Component} from "react";
import './header.css';
import Logo from '../../img/Logo.png';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import App from '../../App';
import News from '../../Pages/News';
import Shop from '../../Pages/Shop';
import AboutUs from '../../Pages/AboutUs';
import Contact from '../../Pages/Contact';


export default class Header extends Component {
    render() {
        // <Router>
        //     <Routes>
        //         <Route path='/' element={<App />} >
        //             <Route path='/news' element={<News />} />
        //             <Route path='/shop' element={<Shop />} />
        //             <Route path='/about' element={<AboutUs />} />
        //             <Route path='/contact' element={<Contact />} />
        //         </Route>
        //     </Routes>
        // </Router>
        return(
            <header className="header">
                <div className="container">
                    <a className='header-logo' href="/">
                        <img src={Logo} alt="project-logo" />
                    </a>
                    <nav className='menu'>
                        <ul>
                            <li><a href="/">Main</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </header>
            
        );
    }
}