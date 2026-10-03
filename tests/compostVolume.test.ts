import { describe, it, expect } from 'vitest';
import {
  computeBinVolume,
  BIN_PRESETS,
  US_GALLONS_PER_CUBIC_FOOT,
  HOT_PILE_MIN_CU_FT,
} from '../src/lib/compostVolume';

describe('computeBinVolume', () => {
  it('computes imperial volume, yards, litres and gallons', () => {
    const result = computeBinVolume(3, 3, 3, 'imperial');
    expect(result.cuFt).toBe(27);
    expect(result.cuYd).toBe(1);
    expect(result.litres).toBeCloseTo(27 * 28.3168, 3);
    expect(result.gallons).toBeCloseTo(27 * US_GALLONS_PER_CUBIC_FOOT, 3);
    expect(result.isHotPileSized).toBe(true);
  });

  it('computes metric volume', () => {
    const result = computeBinVolume(1, 1, 1, 'metric');
    expect(result.litres).toBe(1000);
    expect(result.cuFt).toBeCloseTo(1000 / 28.3168, 3);
    expect(result.cuYd).toBeCloseTo(result.cuFt / 27, 5);
    expect(result.isHotPileSized).toBe(true);
  });

  it('reports finished yield as a 40% to 60% range instead of a single figure', () => {
    const result = computeBinVolume(3, 3, 3, 'imperial');
    expect(result.finishedMinCuFt).toBeCloseTo(10.8, 5);
    expect(result.finishedMaxCuFt).toBeCloseTo(16.2, 5);
    expect(result.finishedMinCuFt).toBeLessThan(result.finishedMaxCuFt);
    expect(result.finishedMinLitres).toBeCloseTo(result.litres * 0.4, 5);
    expect(result.finishedMaxLitres).toBeCloseTo(result.litres * 0.6, 5);
  });

  it('marks the hot-pile threshold at 27 cubic feet', () => {
    expect(HOT_PILE_MIN_CU_FT).toBe(27);
    expect(computeBinVolume(2.9, 3, 3, 'imperial').isHotPileSized).toBe(false);
    expect(computeBinVolume(3, 3, 3, 'imperial').isHotPileSized).toBe(true);
  });

  it('does not produce NaN for invalid dimensions', () => {
    const result = computeBinVolume(Number.NaN, 0, -5, 'imperial');
    expect(result.cuFt).toBe(0);
    expect(Number.isNaN(result.gallons)).toBe(false);
  });
});

describe('BIN_PRESETS', () => {
  it('includes a dual-chamber tumbler preset matching its advertised 45 gallon capacity', () => {
    const tumbler = BIN_PRESETS.find((p) => p.name.includes('45 Gal'));
    expect(tumbler).toBeDefined();
    const volume = computeBinVolume(tumbler!.length, tumbler!.width, tumbler!.height, tumbler!.unit);
    expect(volume.gallons).toBeGreaterThanOrEqual(44.5);
    expect(volume.gallons).toBeLessThanOrEqual(45.5);
    expect(volume.cuFt).toBeCloseTo(6.0, 5);
  });

  it('keeps exactly four tool presets', () => {
    expect(BIN_PRESETS).toHaveLength(4);
  });
});
