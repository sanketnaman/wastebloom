export const RECOMMENDED_BROWNS_MIN = 2;
export const RECOMMENDED_BROWNS_MAX = 4;

export interface BrownGreenInput {
  greenVolume: number;
  brownVolume: number;
  greenName: string;
  brownName: string;
}

export type BrownGreenStatus = 'balanced' | 'needs-browns' | 'too-carbon';

export interface BrownGreenAssessment {
  status: BrownGreenStatus;
  /** Browns per 1 green by volume; null when either input is zero. */
  ratio: number | null;
  ratioLabel: string;
  statusTitle: string;
  statusAdvice: string;
}

const round1 = (value: number): number => Math.round(value * 10) / 10;

export const assessBrownGreen = (input: BrownGreenInput): BrownGreenAssessment => {
  const green = Number.isFinite(input.greenVolume) ? Math.max(0, input.greenVolume) : 0;
  const brown = Number.isFinite(input.brownVolume) ? Math.max(0, input.brownVolume) : 0;

  if (green === 0 && brown === 0) {
    return {
      status: 'needs-browns',
      ratio: null,
      ratioLabel: '—',
      statusTitle: 'Empty Pile — Add Browns and Greens',
      statusAdvice: 'Add both dry brown materials and green materials. A workable starting recipe is 2 to 4 buckets of browns for every 1 bucket of greens, by volume.',
    };
  }

  if (green === 0) {
    return {
      status: 'too-carbon',
      ratio: null,
      ratioLabel: '—',
      statusTitle: 'No Greens Yet',
      statusAdvice: `You have ${brown} bucket(s) of ${input.brownName} and no greens. Add roughly ${round1(brown / 2)} to ${round1(brown / 4)} bucket(s) of green material such as kitchen scraps or grass clippings to land in the 2:1 to 4:1 browns-to-greens band.`,
    };
  }

  const ratio = round1(brown / green);

  if (brown === 0) {
    return {
      status: 'needs-browns',
      ratio: 0,
      ratioLabel: '0 : 1',
      statusTitle: 'Add Browns (Carbon)',
      statusAdvice: `You have ${green} bucket(s) of ${input.greenName} and no browns. Add ${RECOMMENDED_BROWNS_MIN * green} to ${RECOMMENDED_BROWNS_MAX * green} bucket(s) of dry browns such as leaves, straw or shredded cardboard to reach the 2:1 to 4:1 band.`,
    };
  }

  if (ratio < RECOMMENDED_BROWNS_MIN) {
    const needed = Math.max(1, Math.ceil(RECOMMENDED_BROWNS_MIN * green - brown));
    return {
      status: 'needs-browns',
      ratio,
      ratioLabel: `${ratio} : 1`,
      statusTitle: 'Add Browns (Carbon)',
      statusAdvice: `Your mix is ${ratio} parts browns to 1 part greens by volume — below the recommended 2:1 to 4:1 band. Too many greens tend to compact, go anaerobic and smell. Add about ${needed} more bucket(s) of ${input.brownName} (or another dry brown such as leaves or shredded cardboard).`,
    };
  }

  if (ratio > RECOMMENDED_BROWNS_MAX) {
    const needed = Math.max(1, Math.ceil(brown / RECOMMENDED_BROWNS_MAX - green));
    return {
      status: 'too-carbon',
      ratio,
      ratioLabel: `${ratio} : 1`,
      statusTitle: 'Add Greens (Nitrogen)',
      statusAdvice: `Your mix is ${ratio} parts browns to 1 part greens by volume — above the recommended 2:1 to 4:1 band. A pile this carbon-heavy breaks down slowly and rarely heats up. Add about ${needed} more bucket(s) of ${input.greenName} such as kitchen scraps or fresh grass clippings.`,
    };
  }

  return {
    status: 'balanced',
    ratio,
    ratioLabel: `${ratio} : 1`,
    statusTitle: 'Well-Balanced Pile',
    statusAdvice: `Your mix is ${ratio} parts browns to 1 part greens by volume — inside the recommended 2:1 to 4:1 band. Keep the pile as moist as a wrung-out sponge, turn it occasionally, and add more browns if it starts to smell.`,
  };
};
