import React from 'react';
import StatsStrip from './StatsStrip';
import TabsBlock from './TabsBlock';

const AboutSection = () => {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Image with overlay and stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img
                src="/assets/images/event-highlights/isqip.webp"
                alt="IEEE community"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="-mt-8 sm:-mt-10 relative">
              <StatsStrip />
            </div>
          </div>

          {/* Right: Tabs */}
          <div className="lg:col-span-6">
            <TabsBlock />
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
