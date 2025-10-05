import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => (
  <div className="min-h-screen bg-white transition-colors duration-300">
    <Navbar />
    <About />
    <Skills />
    <TechStack />
    <Achievements />
    <Experience />
    <Projects />
    <Education />
    <Contact />
  </div>
);

export default App;
