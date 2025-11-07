import React, { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, start }) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1200; // ms
    const target = value;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.floor(eased * target);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, value]);

  return (
    <div className="flex items-center gap-3 rounded-xl bg-neutral-900/80 ring-1 ring-white/10 px-4 py-3 backdrop-blur">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xl font-semibold text-white tabular-nums">{display}</div>
        <div className="text-xs text-white/70">{label}</div>
      </div>
    </div>
  );
};

const StatsStrip = () => {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            setTriggered(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <StatCard icon={Users} label="Members" value={544} start={triggered} />
        <StatCard icon={Calendar} label="Events/Year" value={120} start={triggered} />
        <StatCard icon={Award} label="Awards Won" value={30} start={triggered} />
      </div>
    </div>
  );
};

export default StatsStrip;
