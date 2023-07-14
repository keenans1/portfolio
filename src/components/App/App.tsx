import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <main className='app'>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App