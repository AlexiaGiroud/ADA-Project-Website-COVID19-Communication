import imgBackground from "figma:asset/51124e77e3c2f96afd7eb1dc6df942843a3a2cb5.png";
import imgSingleCell from "figma:asset/93be32fb021fefefaa0ce0e541b1371082525cff.png";
import imgRawData from "figma:asset/588015d29ff2c2de82d1f842716b45efe1d6eda2.png";

const dataSubsections = [
  {
    title: "Who is in the dataset?",
    color: "#C07DFF",
    image: null,
  },
  {
    title: "What is in a Single Cell Analysis?",
    color: "#C07DFF",
    image: null,
  },
  {
    title: "From Raw Data into Insights?",
    color: "#C07DFF",
    image: null,
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
        {dataSubsections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Left column - 25% - Title */}
            <div className="md:w-1/4 flex items-start">
              <div
                className="relative overflow-hidden rounded-2xl p-6 w-full"
                style={{
                  backgroundColor: `${section.color}20`,
                  borderWidth: "2px",
                  borderColor: section.color,
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url(${imgBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <h3
                  className="relative z-10 text-white text-xl md:text-2xl uppercase tracking-wide"
                  style={{ fontWeight: 700 }}
                >
                  {section.title}
                </h3>
                {section.subtopics && (
                  <ul className="relative z-10 mt-4 space-y-2">
                    {section.subtopics.map(
                      (subtopic, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-white/80 text-sm"
                        >
                          • {subtopic}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </div>

            {/* Right column - 75% - Content */}
            <div className="md:w-3/4">
              <div
                className="rounded-2xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden"
                style={{
                  borderWidth: "2px",
                  borderColor: section.color,
                  backgroundColor: "#1A1A1A",
                }}
              >
                {section.image ? (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  <p className="text-gray-400 text-center">
                    [Visualization placeholder for{" "}
                    {section.title}]
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}