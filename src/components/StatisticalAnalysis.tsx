export function StatisticalAnalysis() {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Statistical Analysis
      </h3>

      {/* Results Placeholder */}
      <div className="bg-[#2A2A2A] rounded-xl p-12 border-2 border-[#C07DFF]/30 flex items-center justify-center min-h-[400px]">
        <p className="text-gray-400 text-xl text-center">
          📊 Place for statistical results
        </p>
      </div>

      {/* Explanation */}
      <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
        <p className="text-gray-300 text-lg">
          📝 Statistically significant differences between severities
        </p>
      </div>
    </div>
  );
}
