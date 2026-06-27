import { Eye, Home, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import {
  defaultHeroSettings,
  loadHeroSettings,
  mobileCropCurtainHeight,
  mobileOverlayGradient,
  overlayGradient,
  resetHeroSettings,
  saveHeroSettings,
  type HeroSettings,
} from "../lib/heroSettings";
import heroPoster from "../assets/robot-disass-poster.png";
import heroVideo from "../assets/Robot Disass.mp4";

type SliderFieldProps = {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
};

const percent = (value: number) => `${Math.round(value * 100)}%`;

function SliderField({ label, description, value, onChange }: SliderFieldProps) {
  return (
    <label className="block rounded-lg border border-white/10 bg-panel p-5">
      <div className="flex items-start justify-between gap-4">
        <span>
          <span className="block text-base font-semibold text-white">{label}</span>
          <span className="mt-1 block text-sm leading-6 text-steel">{description}</span>
        </span>
        <span className="rounded-md border border-scan/25 bg-scan/10 px-2 py-1 text-sm font-semibold text-scan">
          {percent(value)}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-5 h-2 w-full accent-scan"
      />
    </label>
  );
}

function AdminPage() {
  const [settings, setSettings] = useState<HeroSettings>(loadHeroSettings);

  const updateSetting = (key: keyof HeroSettings, value: number) => {
    const nextSettings = { ...settings, [key]: value };
    setSettings(nextSettings);
    saveHeroSettings(nextSettings);
  };

  const handleReset = () => {
    setSettings(defaultHeroSettings);
    resetHeroSettings();
  };

  return (
    <PageShell>
      <section className="border-b border-white/10 bg-[#080A0A]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-scan">
                <SlidersHorizontal size={16} />
                Local admin
              </p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Portfolio controls</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-steel">
                Tune the hero background video visibility. The values are saved in this browser.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-steel transition hover:border-white/35 hover:text-white"
              >
                <RotateCcw size={17} />
                Reset hero
              </button>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-scan bg-scan px-4 py-2 text-sm font-semibold text-ink transition hover:border-white hover:bg-white"
              >
                <Home size={17} />
                View home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-4">
          <SliderField
            label="Video opacity"
            description="Higher values make the moving MP4 easier to see."
            value={settings.videoOpacity}
            onChange={(value) => updateSetting("videoOpacity", value)}
          />
          <SliderField
            label="Poster opacity"
            description="Controls the still image shown behind the video while it loads."
            value={settings.posterOpacity}
            onChange={(value) => updateSetting("posterOpacity", value)}
          />
          <SliderField
            label="Overlay strength"
            description="Higher values hide more of the video behind the text."
            value={settings.overlayStrength}
            onChange={(value) => updateSetting("overlayStrength", value)}
          />
          <SliderField
            label="Mobile vertical crop"
            description="Drag right to make the dark text area eat upward into the mobile video."
            value={settings.mobileCropY}
            onChange={(value) => updateSetting("mobileCropY", value)}
          />
        </div>

        <div className="space-y-6">
          <section className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4 text-sm font-semibold text-scan">
              <Eye size={16} />
              Desktop hero preview
            </div>
            <div className="relative min-h-[24rem] overflow-hidden">
              <img
                src={heroPoster}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right grayscale-[12%]"
                style={{ opacity: settings.posterOpacity }}
              />
              <video
                aria-hidden="true"
                autoPlay
                loop
                muted
                poster={heroPoster}
                playsInline
                preload="metadata"
                className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right grayscale-[12%]"
                style={{ opacity: settings.videoOpacity }}
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: overlayGradient(settings.overlayStrength) }} />
              <div className="absolute inset-0 bg-grid opacity-25" />
              <div className="relative flex min-h-[24rem] items-center p-6 sm:p-8">
                <div className="max-w-xl">
                  <p className="mb-4 inline-flex rounded-md border border-scan/30 bg-scan/10 px-3 py-1 text-sm font-semibold text-scan">
                    Unity, simulation, WebGL, VR
                  </p>
                  <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Unity Developer for Interactive Simulations
                  </h2>
                  <p className="mt-5 text-base leading-7 text-steel">
                    Use this preview to balance motion and readability before checking the real home page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4 text-sm font-semibold text-scan">
              <Eye size={16} />
              Mobile crop preview
            </div>
            <div className="mx-auto max-w-sm overflow-hidden bg-ink">
              <div className="relative min-h-[34rem] overflow-hidden">
                <img
                  src={heroPoster}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[118%] object-cover object-center grayscale-[10%]"
                  style={{
                    opacity: Math.min(0.8, settings.posterOpacity + 0.2),
                    transform: "translateX(-50%)",
                    WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
                    maskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
                  }}
                />
                <video
                  aria-hidden="true"
                  autoPlay
                  loop
                  muted
                  poster={heroPoster}
                  playsInline
                  preload="metadata"
                  className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[118%] object-cover object-center grayscale-[10%]"
                  style={{
                    opacity: Math.min(0.9, settings.videoOpacity + 0.22),
                    transform: "translateX(-50%)",
                    WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
                    maskImage: "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)",
                  }}
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0"
                  style={{ background: mobileOverlayGradient(settings.overlayStrength) }}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem]">
                  <div
                    className="absolute inset-x-0 bottom-0"
                    style={{
                      height: mobileCropCurtainHeight(settings.mobileCropY),
                      background:
                        "linear-gradient(180deg, rgba(5, 6, 6, 0) 0%, rgba(5, 6, 6, 0.92) 24%, #050606 100%)",
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-grid opacity-25" />
                <div className="relative px-4 pb-8 pt-64">
                  <p className="mb-4 inline-flex rounded-md border border-scan/30 bg-scan/10 px-3 py-1 text-sm font-semibold text-scan">
                    Unity, simulation, WebGL, VR
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-white">Unity Developer for Interactive Simulations</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}

export default AdminPage;
