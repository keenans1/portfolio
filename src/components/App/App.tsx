import React from 'react';
import Header from '../Header/Header';
import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default App