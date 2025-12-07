import { useState } from 'react';

const confounders = [
  { id: 'age', label: 'Age 👴', color: '#D61C8C' },
  { id: 'sex', label: 'Sex', color: '#C07DFF' },
  { id: 'smoking', label: 'Smoking 🚬', color: '#F29900' },
];

export function CausalAnalysis() {
  const [selectedConfounder, setSelectedConfounder] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Causal Analysis
      </h3>

      {/* 8.1 DAG Section */}
      <div className="space-y-6">
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-400 text-xl text-center">
            📊 Place for DAG
          </p>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Explanation of the DAG
          </p>
        </div>
      </div>

      {/* 8.2 Transition Text */}
      <div className="bg-gradient-to-r from-[#D61C8C]/20 to-[#C07DFF]/20 rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg text-center">
          📝 Why do we switch to the demographics?
        </p>
      </div>

      {/* 8.3 Confounder Analysis (Split Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            📝 We did a linear regression, why, and how
          </p>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 text-xl text-center">
            📊 Graph of our linear regression
          </p>
        </div>
      </div>

      {/* 8.4 Demographic Factors */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600 }}>
          Demographic Confounders
        </h4>
        
        {/* Button Row */}
        <div className="flex flex-wrap gap-4">
          {confounders.map((confounder) => (
            <button
              key={confounder.id}
              onClick={() => setSelectedConfounder(confounder.id)}
              className={`px-8 py-4 rounded-lg text-white text-lg transition-all ${
                selectedConfounder === confounder.id
                  ? 'transform scale-105 shadow-lg'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: confounder.color,
                border: selectedConfounder === confounder.id ? '2px solid white' : '2px solid transparent',
                fontWeight: 600,
              }}
            >
              {confounder.label}
            </button>
          ))}
        </div>

        {/* Confounder Impact Display */}
        {selectedConfounder && (
          <div className="bg-[#2A2A2A] rounded-xl p-8 border-2 animate-fadeIn" style={{ 
            borderColor: confounders.find(c => c.id === selectedConfounder)?.color 
          }}>
            <p className="text-gray-300 text-lg">
              📝 Impact of <span style={{ 
                color: confounders.find(c => c.id === selectedConfounder)?.color,
                fontWeight: 600 
              }}>
                {confounders.find(c => c.id === selectedConfounder)?.label}
              </span> on severity
            </p>
          </div>
        )}
      </div>

      {/* 8.5 Conclusions */}
      <div className="bg-gradient-to-br from-[#D61C8C]/20 via-[#C07DFF]/20 to-[#F29900]/20 rounded-xl p-8 border-2 border-[#C07DFF]/30">
        <h4 className="text-2xl text-white mb-4" style={{ fontWeight: 600 }}>
          Conclusions
        </h4>
        <p className="text-gray-300 text-lg">
          📝 Conclusions from linear regression analysis
        </p>
      </div>
    </div>
  );
}
