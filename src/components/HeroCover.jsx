import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[380px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white">
          <p className="text-sm sm:text-base uppercase tracking-widest text-orange-300/90 font-medium">About Us</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="block">IEEE Student Branch</span>
            <span className="block text-orange-300">College of Engineering Chengannur</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
            Red-orange slanted tiles, dark immersive background — a modern, interactive canvas reflecting our tech-forward spirit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
