import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
    loader: file('src/data/works.json'),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            job: z.string(),
            link: z.url(),
            color: z.string(),
            logo: image(),
            startDate: z.coerce.date(),
            endDate: z.coerce.date().optional(),
        }),
});

export const collections = {
    work,
};
