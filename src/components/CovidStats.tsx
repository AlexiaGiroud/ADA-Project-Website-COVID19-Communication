import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: 775000000,
    label: 'COVID-19 Cases',
    suffix: '+',
    color: '#D61C8C',
  },
  {
    value: 40,
    label: 'Asymptomatic Patients',
    suffix: '%',
    color: '#C07DFF',
  },
  {
    value: 7000000,
    label: 'COVID-19 Deaths',
    suffix: '+',
    color: '#F29900',
  },
];

function formatNumber(num: number, suffix: string): string {
  if (suffix === '%') {
    return num.toFixed(0);
  }
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function CountingNumber({ targetValue, suffix, color }: { targetValue: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = targetValue / steps;
          let current = 0;
          const stepDuration = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div 
        className="text-5xl md:text-7xl mb-4"
        style={{ 
          color: color,
          fontWeight: 900
        }}
      >
        {formatNumber(count, suffix)}{suffix}
      </div>
    </div>
  );
}

export function CovidStats() {
  return (
    <section className="px-6 py-16 bg-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <CountingNumber 
                targetValue={stat.value} 
                suffix={stat.suffix}
                color={stat.color}
              />
              <p className="text-white text-lg md:text-xl text-center mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">
            NOT REAL STATS, FACT CHECK
          </p>
        </div>
      </div>
    </section>
  );
}
