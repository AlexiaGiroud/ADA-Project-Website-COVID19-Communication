export function StackedCellTypePlot() {
  // Replace this URL with where you host your Plotly HTML file
  // Options: GitHub Pages, Netlify, Vercel, or any static file hosting
  const plotlyUrl = "https://alexiagiroud.github.io/ADA-Project-Website-COVID19-Communication/stacked_celltype_by_status_plotly.html";

  return (
    <div className="w-full">
      <iframe
        src={plotlyUrl}
        className="w-full h-[600px] border-0 rounded-lg"
        title="Stacked Cell Type Distribution"
      />
    </div>
  );
}