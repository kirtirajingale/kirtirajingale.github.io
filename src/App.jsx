import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Stats />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
