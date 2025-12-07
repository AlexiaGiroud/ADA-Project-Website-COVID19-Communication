import { Database, GitBranch, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const methods = [
  {
    icon: Database,
    title: 'Single-Cell RNA Sequencing',
    shortDesc: 'Single Cell Analysis',
    description: '🔬 Explanations on single cell analysis',
    color: '#D61C8C',
  },
  {
    icon: GitBranch,
    title: 'CellPhoneDB Analysis',
    shortDesc: 'CellPhone DB',
    description: '📞 Explanations on CellPhone DB',
    color: '#C07DFF',
  },
  {
    icon: BarChart3,
    title: 'Causal Inference',
    shortDesc: 'Causal Analysis',
    description: '🔗 Explanation on Causal Analysis',
    color: '#F29900',
  },
];

export function MethodologyInteractive() {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-16" style={{ fontWeight: 900 }}>
          Methodology
        </h2>
        
        {selectedMethod === null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMethod(index)}
                  className="bg-[#3A3A3A] rounded-2xl p-8 border border-[#6811BA]/30 hover:border-[#6811BA]/60 transition-all hover:transform hover:scale-105 text-center cursor-pointer"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <Icon size={32} style={{ color: method.color }} />
                  </div>
                  <h3 className="text-xl text-white mb-4" style={{ color: method.color }}>
                    {method.title}
                  </h3>
                  <p className="text-gray-300">
                    Click to learn more
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <button
              onClick={() => setSelectedMethod(null)}
              className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to all methods
            </button>
            <div className="bg-[#3A3A3A] rounded-2xl p-12 border-2" style={{ borderColor: methods[selectedMethod].color }}>
              <div className="flex items-start gap-6 mb-6">
                {(() => {
                  const Icon = methods[selectedMethod].icon;
                  return (
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${methods[selectedMethod].color}20` }}
                    >
                      <Icon size={40} style={{ color: methods[selectedMethod].color }} />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-3xl text-white mb-4" style={{ color: methods[selectedMethod].color }}>
                    {methods[selectedMethod].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {methods[selectedMethod].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
