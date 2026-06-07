import { FlaskConical } from "lucide-react";
import LabStation from "../components/LabStation";
import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";

function LabPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 bg-[#080A0A]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-scan/30 bg-scan/10 text-scan">
            <FlaskConical size={24} />
          </div>
          <SectionHeader
            eyebrow="Optional prototype space"
            title="Interactive Simulation Lab"
            description="A small digital lab for compact Unity-style experiments, training prototypes, and interaction ideas. It is separate from the main portfolio flow so visitors never need to play through it."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <LabStation
            title="Fluid Physics Bench"
            description="A visual bench for fluid-like motion, particle behavior, and parameter-driven learning."
            cta="View Experiment"
            variant="fluid"
          />
          <LabStation
            title="PID Control Station"
            description="An animated graph station for target response, overshoot, and control tuning concepts."
            cta="View Experiment"
            variant="pid"
          />
          <LabStation
            title="PLC Digital Twin Room"
            description="A device-state station with toggles, relays, and simple virtual industrial feedback."
            cta="View Experiment"
            variant="plc"
          />
          <LabStation
            title="VR Booth Showcase"
            description="A compact preview station for booth-ready VR interactions and quick onboarding loops."
            cta="View Project"
            variant="vr"
          />
        </div>
      </section>
    </PageShell>
  );
}

export default LabPage;
