import { Locale } from '@/src/i18n/config';
import { Link } from '@/src/i18n/navigation';
import { clsx } from 'clsx';
import { useLocale } from 'next-intl';
import { PropsWithChildren, useMemo } from 'react';
import styles from './header.module.scss';

type Props = PropsWithChildren<{
    locale: Locale;
}>;

export default function HeaderLocaleSwitcher({ locale, children }: Props) {
    const currentLocale = useLocale();

    const classes = useMemo(() => {
        return clsx(styles.headerContainerLocaleSelector, {
            [styles.headerContainerLocaleSelectorActive]: currentLocale === locale,
        });
    }, [currentLocale, locale]);

    return (
        <Link href="/" locale={locale} className={classes}>
            {children}
        </Link>
    );
}
