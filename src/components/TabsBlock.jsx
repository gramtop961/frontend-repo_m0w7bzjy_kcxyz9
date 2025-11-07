import React, { useEffect, useId, useRef, useState } from 'react';

const TABS = [
  {
    id: 'tab-1',
    label: 'What is IEEE?',
    description:
      "IEEE is the world's largest technical professional organization, driving innovation and advancing technology for humanity.",
  },
  {
    id: 'tab-2',
    label: 'Our Mission',
    description:
      'To foster a community of innovators and empower technical professionals to create impactful solutions for society.',
  },
  {
    id: 'tab-3',
    label: 'Our Vision',
    description:
      'To lead technological advancement through collaboration, research, and continuous learning.',
  },
];

const TabsBlock = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const panelIdPrefix = useId();
  const tabRefs = useRef([]);

  // Keyboard navigation (roving tabindex)
  const onKeyDown = (e) => {
    const count = TABS.length;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (active + 1) % count;
      setActive(next);
      tabRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (active - 1 + count) % count;
      setActive(prev);
      tabRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(count - 1);
      tabRefs.current[count - 1]?.focus();
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 250);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="About IEEE tabs"
        className="inline-flex gap-2 rounded-full bg-neutral-900/70 p-1 ring-1 ring-white/10"
        onKeyDown={onKeyDown}
      >
        {TABS.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            id={`${panelIdPrefix}-${tab.id}`}
            aria-selected={active === idx}
            aria-controls={`${panelIdPrefix}-panel-${tab.id}`}
            tabIndex={active === idx ? 0 : -1}
            ref={(el) => (tabRefs.current[idx] = el)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
              active === idx
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {TABS.map((tab, idx) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`${panelIdPrefix}-panel-${tab.id}`}
            aria-labelledby={`${panelIdPrefix}-${tab.id}`}
            hidden={active !== idx}
            className={`rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-6 text-white/90 transition-all duration-300 ${
              isAnimating ? 'opacity-80 translate-y-0' : 'opacity-100'
            }`}
          >
            <p className="text-base leading-relaxed">{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsBlock;
