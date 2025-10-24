'use client';

import Anchor from '@/src/component/action/anchor';
import { usePathname } from '@/src/i18n/navigation';
import { clsx } from 'clsx';
import { PropsWithChildren, useMemo } from 'react';
import styles from './header.module.scss';

type Props = PropsWithChildren<{
    href: string;
}>;

export default function HeaderLink({ href, children }: Props) {
    const pathname = usePathname();

    const classes = useMemo(() => {
        return clsx(styles.headerContainerNavLink, {
            [styles.headerContainerNavLinkActive]: pathname === href,
        });
    }, [pathname, href]);

    return (
        <li>
            <Anchor className={classes} href={href}>
                {children}
            </Anchor>
        </li>
    );
}
