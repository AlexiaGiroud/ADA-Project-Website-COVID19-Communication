import { useState } from 'react';

const severities = [
  'Moderate', 'Healthy', 'Mild', 'Critical', 'Death', 'Severe', 'Asymptomatic', 'Non-Covid', 'LPS'
];

const severityColors: { [key: string]: string } = {
  'Moderate': '#F29900',
  'Healthy': '#4CAF50',
  'Mild': '#FFC9E9',
  'Critical': '#D61C8C',
  'Death': '#1A1A1A',
  'Severe': '#C07DFF',
  'Asymptomatic': '#E5C9FF',
  'Non-Covid': '#FFBC47',
  'LPS': '#6811BA',
};

export function CellCommunication() {
  const [selectedNetworkSeverity, setSelectedNetworkSeverity] = useState('Moderate');
  const [selectedLigandSeverity, setSelectedLigandSeverity] = useState('Moderate');

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Cell Communication Analysis
      </h3>

      {/* 7.1 Interaction Networks */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600 }}>
          Which cells communicate with each other?
        </h4>
        
        {/* Button Row */}
        <div className="flex flex-wrap gap-3">
          {severities.map((severity) => (
            <button
              key={severity}
              onClick={() => setSelectedNetworkSeverity(severity)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedNetworkSeverity === severity
                  ? 'transform scale-105 shadow-lg'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: severityColors[severity],
                color: severity === 'Death' ? '#fff' : '#fff',
                border: selectedNetworkSeverity === severity ? '2px solid white' : '2px solid transparent',
              }}
            >
              {severity}
            </button>
          ))}
        </div>

        {/* Network Placeholder */}
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex flex-col items-center justify-center min-h-[500px]">
          <p className="text-gray-400 text-xl text-center mb-4">
            📊 Place for networks between cells
          </p>
          <p className="text-gray-500 text-center">
            Currently viewing: <span style={{ color: severityColors[selectedNetworkSeverity] }}>{selectedNetworkSeverity}</span>
          </p>
        </div>

        {/* Explanation */}
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Explain differences between severities
          </p>
        </div>
      </div>

      {/* 7.2 Top Ligand-Receptor Interactions */}
      <div className="space-y-8">
        <h4 className="text-2xl md:text-3xl text-white" style={{ fontWeight: 600 }}>
          How are ligand receptors expressed in these cell-cell interactions?
        </h4>
        
        {/* Button Row */}
        <div className="flex flex-wrap gap-3">
          {severities.map((severity) => (
            <button
              key={severity}
              onClick={() => setSelectedLigandSeverity(severity)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedLigandSeverity === severity
                  ? 'transform scale-105 shadow-lg'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: severityColors[severity],
                color: severity === 'Death' ? '#fff' : '#fff',
                border: selectedLigandSeverity === severity ? '2px solid white' : '2px solid transparent',
              }}
            >
              {severity}
            </button>
          ))}
        </div>

        {/* Dotplot Placeholder */}
        <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex flex-col items-center justify-center min-h-[500px]">
          <p className="text-gray-400 text-xl text-center mb-4">
            📊 Place for dotplots of expression
          </p>
          <p className="text-gray-500 text-center">
            Currently viewing: <span style={{ color: severityColors[selectedLigandSeverity] }}>{selectedLigandSeverity}</span>
          </p>
        </div>

        {/* Explanation */}
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Differences and insights we will explore
          </p>
        </div>
      </div>
    </div>
  );
}
