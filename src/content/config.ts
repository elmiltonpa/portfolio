import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
