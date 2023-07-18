import React from 'react';
import { ThemeProvider } from '../../ThemeContext';
import './App.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <main className='app'>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App