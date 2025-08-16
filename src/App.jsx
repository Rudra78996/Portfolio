import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolio";

const App = () => {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Light mode background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:hidden"></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background hidden dark:block"></div>

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
