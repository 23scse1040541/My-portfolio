import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main>
        <Hero setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Education setActiveSection={setActiveSection} />
        <Certifications setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
