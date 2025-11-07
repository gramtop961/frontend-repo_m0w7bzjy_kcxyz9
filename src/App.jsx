import React from 'react';
import HeroCover from './components/HeroCover';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroCover />
      <AboutSection />
    </div>
  );
}

export default App;
