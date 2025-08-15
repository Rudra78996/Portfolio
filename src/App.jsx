import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header portfolioData={portfolioData} />
      <main>
        <Hero portfolioData={portfolioData} />
        <About portfolioData={portfolioData} />
        <Experience portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Contact portfolioData={portfolioData} />
      </main>
      <Footer portfolioData={portfolioData} />
    </div>
  );
};

export default App;

