import { locales } from '@/src/i18n/config';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales,
    defaultLocale: 'fr',
});
