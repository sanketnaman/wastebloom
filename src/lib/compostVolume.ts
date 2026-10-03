export const US_GALLONS_PER_CUBIC_FOOT = 7.48052;
export const HOT_PILE_MIN_CU_FT = 27;
export const LITRES_PER_CUBIC_METER = 1000;
export const LITRES_PER_CUBIC_FOOT = 28.3168;
export const YIELD_MIN_FRACTION = 0.4;
export const YIELD_MAX_FRACTION = 0.6;

export type BinUnit = 'imperial' | 'metric';

export interface BinPreset {
  name: string;
  length: number;
  width: number;
  height: number;
  unit: BinUnit;
}

export const BIN_PRESETS: BinPreset[] = [
  { name: 'Standard 3x3x3 ft Pallet Bin', length: 3, width: 3, height: 3, unit: 'imperial' },
  { name: 'Dual-Chamber Tumbler (45 Gal)', length: 2, width: 1.5, height: 2, unit: 'imperial' },
  { name: 'Urban 1x1x1 m Eco Bin', length: 1, width: 1, height: 1, unit: 'metric' },
  { name: 'Small Balcony Planter Box', length: 1.5, width: 1.5, height: 1.5, unit: 'imperial' },
];

export interface BinVolumeResult {
  cuFt: number;
  cuYd: number;
  litres: number;
  gallons: number;
  finishedMinCuFt: number;
  finishedMaxCuFt: number;
  finishedMinLitres: number;
  finishedMaxLitres: number;
  isHotPileSized: boolean;
}

const round1 = (value: number): number => Math.round(value * 10) / 10;

export const computeBinVolume = (
  length: number,
  width: number,
  height: number,
  unit: BinUnit
): BinVolumeResult => {
  const safe = (value: number): number => (Number.isFinite(value) && value > 0 ? value : 0);
  const l = safe(length);
  const w = safe(width);
  const h = safe(height);

  let cuFt: number;
  let litres: number;

  if (unit === 'imperial') {
    cuFt = l * w * h;
    litres = cuFt * LITRES_PER_CUBIC_FOOT;
  } else {
    litres = l * w * h * LITRES_PER_CUBIC_METER;
    cuFt = litres / LITRES_PER_CUBIC_FOOT;
  }

  const cuYd = cuFt / 27;
  const gallons = cuFt * US_GALLONS_PER_CUBIC_FOOT;

  return {
    cuFt,
    cuYd,
    litres,
    gallons,
    finishedMinCuFt: cuFt * YIELD_MIN_FRACTION,
    finishedMaxCuFt: cuFt * YIELD_MAX_FRACTION,
    finishedMinLitres: litres * YIELD_MIN_FRACTION,
    finishedMaxLitres: litres * YIELD_MAX_FRACTION,
    isHotPileSized: cuFt >= HOT_PILE_MIN_CU_FT,
  };
};

export const formatPresetGallons = (preset: BinPreset): number =>
  round1(computeBinVolume(preset.length, preset.width, preset.height, preset.unit).gallons);
