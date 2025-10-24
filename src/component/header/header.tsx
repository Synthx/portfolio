import HeaderLink from '@/src/component/header/header-link';
import { useTranslations } from 'next-intl';
import styles from './header.module.scss';

export default function Header() {
    const t = useTranslations();

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <nav>
                    <ul className={styles.headerContainerNav}>
                        <HeaderLink href="/">{t('navigationHome')}</HeaderLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
