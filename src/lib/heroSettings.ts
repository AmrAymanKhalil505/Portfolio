export type HeroSettings = {
  videoOpacity: number;
  posterOpacity: number;
  overlayStrength: number;
  mobileCropY: number;
};

export const defaultHeroSettings: HeroSettings = {
  videoOpacity: 0.52,
  posterOpacity: 0.34,
  overlayStrength: 1,
  mobileCropY: 0,
};

export const heroSettingsStorageKey = "portfolio.heroSettings";
export const heroSettingsEventName = "portfolio:hero-settings";

const clamp = (value: unknown, fallback: number) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(1, Math.max(0, parsed));
};

export const normalizeHeroSettings = (settings: Partial<HeroSettings> = {}): HeroSettings => ({
  videoOpacity: clamp(settings.videoOpacity, defaultHeroSettings.videoOpacity),
  posterOpacity: clamp(settings.posterOpacity, defaultHeroSettings.posterOpacity),
  overlayStrength: clamp(settings.overlayStrength, defaultHeroSettings.overlayStrength),
  mobileCropY: clamp(settings.mobileCropY, defaultHeroSettings.mobileCropY),
});

export const loadHeroSettings = (): HeroSettings => {
  if (typeof window === "undefined") return defaultHeroSettings;

  try {
    const stored = window.localStorage.getItem(heroSettingsStorageKey);
    if (!stored) return defaultHeroSettings;
    return normalizeHeroSettings(JSON.parse(stored));
  } catch {
    return defaultHeroSettings;
  }
};

export const saveHeroSettings = (settings: HeroSettings) => {
  const normalized = normalizeHeroSettings(settings);
  window.localStorage.setItem(heroSettingsStorageKey, JSON.stringify(normalized));
  window.dispatchEvent(new CustomEvent(heroSettingsEventName, { detail: normalized }));
};

export const resetHeroSettings = () => saveHeroSettings(defaultHeroSettings);

export const overlayGradient = (strength: number) => {
  const value = clamp(strength, defaultHeroSettings.overlayStrength);
  const mid = 0.58 + value * 0.3;
  const right = 0.08 + value * 0.1;

  return `linear-gradient(90deg, #050606 0%, rgba(5, 6, 6, 0.97) 40%, rgba(5, 6, 6, ${mid.toFixed(
    2,
  )}) 58%, rgba(5, 6, 6, 0.48) 76%, rgba(5, 6, 6, ${right.toFixed(2)}) 100%)`;
};

export const mobileOverlayGradient = (strength: number) => {
  const value = clamp(strength, defaultHeroSettings.overlayStrength);
  const top = 0.12 + value * 0.08;
  const middle = 0.36 + value * 0.18;

  return [
    `linear-gradient(180deg, rgba(5, 6, 6, ${top.toFixed(2)}) 0%, rgba(5, 6, 6, ${middle.toFixed(
      2,
    )}) 34%, rgba(5, 6, 6, 0.72) 72%, #050606 92%, #050606 100%)`,
    "linear-gradient(90deg, rgba(5, 6, 6, 0.72) 0%, rgba(5, 6, 6, 0.18) 24%, rgba(5, 6, 6, 0.02) 50%, rgba(5, 6, 6, 0.18) 76%, rgba(5, 6, 6, 0.72) 100%)",
    "radial-gradient(circle at 72% 18%, rgba(169, 251, 215, 0.08), transparent 38%)",
  ].join(", ");
};

export const mobileCropCurtainHeight = (cropY: number) =>
  `${(clamp(cropY, defaultHeroSettings.mobileCropY) * 16).toFixed(2)}rem`;
