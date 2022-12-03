import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
