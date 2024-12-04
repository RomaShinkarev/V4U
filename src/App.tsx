import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />
      <Hero />
      <AboutUs />
      <Portfolio />
      <Team />
      <Services />
      <Contact />
    </div>
  );
}

export default App;