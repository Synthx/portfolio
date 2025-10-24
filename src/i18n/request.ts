import { Locale } from '@/src/i18n/config';
import { routing } from '@/src/i18n/routing';
import { I18nFile } from '@/src/type/i18n';
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'use-intl';

const dictionaries: Record<Locale, () => Promise<I18nFile>> = {
    fr: () => import('@/locales/fr.json').then((m) => m.default),
    en: () => import('@/locales/en.json').then((m) => m.default),
};

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    return {
        locale,
        messages: await dictionaries[locale](),
    };
});
