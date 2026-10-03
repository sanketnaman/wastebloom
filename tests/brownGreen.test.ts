import { describe, it, expect } from 'vitest';
import { assessBrownGreen, RECOMMENDED_BROWNS_MIN, RECOMMENDED_BROWNS_MAX } from '../src/lib/brownGreen';

describe('assessBrownGreen', () => {
  it('reports balanced inside the 2:1 to 4:1 band', () => {
    const result = assessBrownGreen({ greenVolume: 2, brownVolume: 6, greenName: 'scraps', brownName: 'leaves' });
    expect(result.status).toBe('balanced');
    expect(result.ratio).toBe(3);
    expect(result.ratioLabel).toBe('3 : 1');
    expect(RECOMMENDED_BROWNS_MIN).toBe(2);
    expect(RECOMMENDED_BROWNS_MAX).toBe(4);
  });

  it('flags too few browns below 2:1', () => {
    const result = assessBrownGreen({ greenVolume: 4, brownVolume: 4, greenName: 'scraps', brownName: 'leaves' });
    expect(result.status).toBe('needs-browns');
    expect(result.ratio).toBe(1);
    expect(result.statusAdvice).toContain('2:1 to 4:1');
  });

  it('flags too many browns above 4:1', () => {
    const result = assessBrownGreen({ greenVolume: 1, brownVolume: 10, greenName: 'scraps', brownName: 'leaves' });
    expect(result.status).toBe('too-carbon');
    expect(result.ratio).toBe(10);
  });

  it('handles zero greens without dividing by zero', () => {
    const result = assessBrownGreen({ greenVolume: 0, brownVolume: 5, greenName: 'scraps', brownName: 'leaves' });
    expect(result.ratio).toBeNull();
    expect(result.ratioLabel).toBe('—');
    expect(result.status).toBe('too-carbon');
    expect(Number.isNaN(result.ratio as number)).toBe(false);
  });

  it('handles zero browns without dividing by zero', () => {
    const result = assessBrownGreen({ greenVolume: 5, brownVolume: 0, greenName: 'scraps', brownName: 'leaves' });
    expect(result.status).toBe('needs-browns');
    expect(result.ratio).toBe(0);
  });

  it('handles both inputs zero without errors', () => {
    const result = assessBrownGreen({ greenVolume: 0, brownVolume: 0, greenName: 'scraps', brownName: 'leaves' });
    expect(result.ratio).toBeNull();
    expect(result.statusAdvice.length).toBeGreaterThan(0);
  });

  it('never presents a computed mixture C:N ratio', () => {
    const result = assessBrownGreen({ greenVolume: 2, brownVolume: 4, greenName: 'scraps', brownName: 'leaves' });
    expect(Object.keys(result)).not.toContain('estimatedCN');
    expect(JSON.stringify(result)).not.toMatch(/\bC:N\b/);
  });
});
