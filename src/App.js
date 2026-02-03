import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
