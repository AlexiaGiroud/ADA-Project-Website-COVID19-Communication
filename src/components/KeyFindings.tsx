import { MessageSquare, Activity, Network, TrendingDown } from 'lucide-react';

const findings = [
  {
    icon: MessageSquare,
    title: 'Finding 1',
    description: '💡 Write your key findings here',
    color: '#D61C8C',
  },
  {
    icon: Network,
    title: 'Finding 2',
    description: '💡 Write your key findings here',
    color: '#C07DFF',
  },
  {
    icon: Activity,
    title: 'Finding 3',
    description: '💡 Write your key findings here',
    color: '#F29900',
  },
  {
    icon: TrendingDown,
    title: 'Finding 4',
    description: '💡 Write your key findings here',
    color: '#6811BA',
  },
];

export function KeyFindings() {
  return (
    <section className="px-6 py-16 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Key Findings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {findings.map((finding, index) => {
            const Icon = finding.icon;
            return (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#6811BA]/30 hover:border-[#6811BA]/60 transition-all hover:transform hover:scale-105"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${finding.color}20` }}
                >
                  <Icon size={28} style={{ color: finding.color }} />
                </div>
                <h3 className="text-xl text-white mb-3" style={{ color: finding.color }}>
                  {finding.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {finding.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}