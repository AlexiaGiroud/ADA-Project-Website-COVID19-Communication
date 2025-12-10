export function SingleCellDataset() {
  return (
    <div className="space-y-16">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl text-white uppercase tracking-tight" style={{ fontWeight: 700, color: '#C07DFF' }}>
        Single-Cell RNA Sequencing Dataset
      </h3>

      {/* 5.1 General Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#D61C8C]/30">
          <div className="text-4xl mb-2" style={{ color: '#D61C8C', fontWeight: 900 }}>143</div>
          <div className="text-gray-300">Patients</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#C07DFF]/30">
          <div className="text-4xl mb-2" style={{ color: '#C07DFF', fontWeight: 900 }}>9</div>
          <div className="text-gray-300">Severities</div>
        </div>
        <div className="bg-[#2A2A2A] rounded-xl p-6 text-center border-2 border-[#F29900]/30">
          <div className="text-4xl mb-2" style={{ color: '#F29900', fontWeight: 900 }}>XXX</div>
          <div className="text-gray-300">Cells</div>
        </div>
      </div>

      {/* 5.2 Treemap Section */}
      <div className="space-y-6">
        <iframe
          src="https://alexiagiroud.github.io/avADAkedavra25_website/treemap_mode_mapped.html"
          className="w-full h-[500px] lg:h-[600px] border-0 rounded-xl"
          title="Treemap Visualization"
          style={{ background: 'transparent' }}
        />
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 What we can see on the UMAP and Treemap.
          </p>
        </div>
      </div>

      {/* 5.3 UMAP (Initial Clustering) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-[#D61C8C]/30 via-[#C07DFF]/30 to-[#FFC9E9]/30 rounded-3xl p-2">
            <iframe 
              src="https://alexiagiroud.github.io/avADAkedavra25_website/umap_complete_website.html" 
              className="w-full h-[850px] border-0"
              title="UMAP colored by initial clustering"
              style={{ background: 'transparent' }}
            />
          </div>
        <div className="lg:col-span-1 bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30 flex items-center">
          <p className="text-gray-300 text-lg">
            📝 Text placeholder for UMAP insights
          </p>
        </div>
      </div>

      {/* 5.4 Dotplot (Gene Expression) */}
      <div className="space-y-6">
        <iframe
          title="Dotplot — gene expression"
          src="https://alexiagiroud.github.io/avADAkedavra25_website/dotplot_gene_expression.html"
          className="w-full"
          style={{ height: 650, border: 0 }}
        />
        <div className="bg-[#2A2A2A] rounded-xl p-6 border-2 border-[#C07DFF]/30">
          <p className="text-gray-300 text-lg">
            📝 Why do we look at different severities?
          </p>
        </div>
      </div>
    </div>
  );
}