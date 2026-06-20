// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://iampinpin.dev',
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Antonio",
            cssVariable: "--font-antonio",
            weights: [400, 600, 700, 900],
        },
    ],
});