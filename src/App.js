import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundry from "./components/Error/ErrorBoundry/ErrorBoundry";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './Pages/News';
import NewsItem from "./components/NewsItem/NewsItem";
import Shop from './Pages/Shop';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <ErrorBoundry>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={ <Main /> } exact />
            <Route path='/news' element={ <News /> } exact />
            <Route path='/news/:id' element={ <NewsItem /> } />
            <Route path='/shop' element={ <Shop /> } exact />
            <Route path='/about' element={ <AboutUs /> } exact />
            <Route path='/contact' element={ <Contact /> } exact />
          </Routes>
        </Router>
      </main>
    </ErrorBoundry>
  );
}
