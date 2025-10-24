'use client';

import useStorage from '@/src/hook/useStorage';
import { Theme } from '@/src/type/theme';
import { MoonStarsIcon, SunHorizonIcon } from '@phosphor-icons/react/ssr';
import { useEffect } from 'react';
import styles from './theme-toggle.module.scss';

export default function ThemeToggle() {
    const [theme, setTheme] = useStorage<Theme>('theme', 'light');

    const onThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (!theme) return;

        const htmlEl = document.documentElement;
        htmlEl.classList.toggle('dark', theme === 'dark');
        htmlEl.setAttribute('data-theme', theme);
        htmlEl.style.colorScheme = theme;
    }, [theme]);

    return (
        <div className={styles.themeToggle}>
            <input type="checkbox" name="theme" id="theme-toggle" checked={theme === 'dark'} onChange={onThemeChange} />
            <SunHorizonIcon size={24} />
            <label className={styles.themeToggleLabel} htmlFor="theme-toggle">
                <span className={styles.themeToggleLabelSwitch}></span>
            </label>
            <MoonStarsIcon size={24} />
        </div>
    );
}
