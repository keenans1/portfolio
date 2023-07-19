// import React, { useContext } from 'react';
// import { ThemeProvider } from '../../ThemeContext';
// import ThemeContext from "../../ThemeContext";
// import './App.css';
// import Header from '../Header/Header';
// import AboutMe from '../AboutMe/AboutMe';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';
// import Footer from '../Footer/Footer';

// const App = () => {

//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <ThemeProvider>
//       <main className={isDarkMode ? "app-dark-mode" : "app-light-mode"}>
//         <Header />
//         <AboutMe />
//         <Projects />
//         <Contact />
//         <Footer />
//       </main>
//     </ThemeProvider>
//   )
// }

// export default App

import React, { useContext } from 'react';
import { ThemeProvider } from '../../ThemeContext';
import ThemeContext from "../../ThemeContext";
import './App.css';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main className={isDarkMode ? 'app-dark-mode' : 'app-light-mode'}>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;