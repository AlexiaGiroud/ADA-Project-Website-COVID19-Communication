export function UmapWebsite() {
  const plotlyUrl = "https://alexiagiroud.github.io/ADA-Project-Website-COVID19-Communication/umap_website.html";

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={plotlyUrl}
        className="w-full max-w-4xl h-[600px] border-0 bg-transparent"
        style={{ backgroundColor: 'transparent' }}
        title="UMAP Visualization"
      />
    </div>
  );
}
