import { Hero } from './components/Hero';
import { CellDistributionChart } from './components/CellDistributionChart';
import { KeyFindings } from './components/KeyFindings';
import { Methodology } from './components/Methodology';
import { Links } from './components/Links';
import { Team } from './components/Team';
import { Navbar } from './components/Navbar';
import { StackedCellTypePlot } from './components/StackedCellTypePlot';
import { UmapWebsite } from './components/UmapWebsite';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2A2A2A]">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="findings">
        <KeyFindings />
      </div>
      <div id="methodology">
        <Methodology />
      </div>
      <div id="data">
        <CellDistributionChart />
        <div className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-8 text-center">
              UMAP: Cell Type and Severity Analysis
            </h2>
            <UmapWebsite />
          </div>
        </div>
        <div className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-8 text-center">
              Cell Type Distribution by COVID-19 Severity
            </h2>
            <StackedCellTypePlot />
          </div>
        </div>
      </div>
      <div id="resources">
        <Links />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
}