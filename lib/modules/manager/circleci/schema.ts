import { z } from 'zod';

export const CircleCiDocker = z.object({
  image: z.string(),
});

export type CircleCiJob = z.infer<typeof CircleCiJob>;
export const CircleCiJob = z.object({
  docker: z.array(CircleCiDocker).optional(),
});

export type CircleCiOrb = z.infer<typeof CircleCiOrb>;
export const CircleCiOrb = z.object({
  executors: z.record(z.string(), CircleCiJob).optional(),
  jobs: z.record(z.string(), CircleCiJob).optional(),
  orbs: z.record(z.unknown()).optional(),
});

export type CircleCiFile = z.infer<typeof CircleCiFile>;
export const CircleCiFile = z.object({
  aliases: z.array(CircleCiDocker).optional(),
  executors: z.record(z.string(), CircleCiJob).optional(),
  jobs: z.record(z.string(), CircleCiJob).optional(),
  orbs: z.record(z.string(), z.string().or(CircleCiOrb)).optional(),
});
