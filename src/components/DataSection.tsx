import imgWhoIsIn from "../assets/who_is_in_dataset.png";
import imgSingleCell from "../assets/what_is_in_a_single_cell_analysis.png";
import imgRawData from "../assets/from_raw_data_to_insights.png";
import AutoIframe from "./AutoIframe";

const dataSubsections = [
  {
    title: "Who is in the dataset?",
    color: "#C07DFF",
    image: imgWhoIsIn,
    iframeUrls: ["stacked_celltype_by_status_plotly.html", "umap_website.html"],
  },
  {
    title: "What is in a Single Cell Analysis?",
    color: "#C07DFF",
    image: imgSingleCell,
  },
  {
    title: "From Raw Data into Insights?",
    color: "#C07DFF",
    image: imgRawData,
    subtopics: [
      "From Raw Data into Insights",
      "CellPhone DB",
      "Causal Analysis",
      "Statistical Signification",
    ],
  },
];

export function DataSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2
          className="text-3xl md:text-4xl text-white uppercase tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Data
        </h2>
        {dataSubsections.map((section, index) => (
          <div key={index} className="flex flex-col gap-8">
            {/* Full-width figures for each subsection */}
            {section.iframeUrls && section.iframeUrls.length ? (
              section.iframeUrls.map((url, i) => (
                <div key={i} className="w-full">
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1200px] rounded-2xl overflow-hidden">
                      <AutoIframe
                        src={`${import.meta.env.BASE_URL}${url}`}
                        className="w-full border-0 bg-white"
                        title={`${section.title} - Figure ${i + 1}`}
                      />
                    </div>
                  </div>

                  <div className="mt-4 rounded-b-2xl p-6 bg-[#0f0f0f] border border-gray-800 text-gray-300 max-w-[1200px] mx-auto">
                    📝 Analysis and comments will be here
                  </div>
                </div>
              ))
            ) : (
              <div
                className="rounded-2xl p-8 min-h-[400px] flex flex-col items-center justify-center"
                style={{
                  borderWidth: "2px",
                  borderColor: section.color,
                  backgroundColor: "#1A1A1A",
                  overflow: "visible",
                }}
              >
                <p className="text-gray-400 text-center">Relevant figures will be there</p>
                <div className="mt-6 w-full text-gray-300 p-4 rounded bg-[#0f0f0f] border border-gray-800 text-center">
                  📝 Analysis and comments will be here
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}