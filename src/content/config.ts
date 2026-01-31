import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    dates: z.string(),
    order: z.number(),
    description: z.string(),
    lang: z.string().default('en'),
  }),
});

export const collections = {
  experience: experienceCollection,
};
