import { z } from 'zod';

export const scanResultSchema = z.object({
  identifiedMaterial: z.string().min(1),
  confidence: z.enum(['High', 'Medium', 'Low']),
  possibleAlternative: z.string().nullish(),
  compostSuitability: z.enum(['Suitable', 'Suitable with preparation', 'Not recommended']),
  gardeningApplications: z.array(z.string().min(1)).min(1),
  preparation: z.array(z.string().min(1)).min(1),
  usageGuidance: z.string().min(1),
  precautions: z.array(z.string().min(1)).min(1),
  mythsBusted: z.string().optional(),
  cToNRatio: z.string().optional(),
  relatedGuides: z.array(z.string().min(1)).optional(),
});

export type ScanResult = z.infer<typeof scanResultSchema>;

export const troubleshootSchema = z.object({
  cause: z.string().min(1),
  immediateAction: z.array(z.string().min(1)).min(1),
  recoveryPlan: z.array(z.string().min(1)).min(1),
  prevention: z.array(z.string().min(1)).min(1),
});

export type TroubleshootResult = z.infer<typeof troubleshootSchema>;
