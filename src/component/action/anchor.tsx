'use client';

import MotionArrow from '@/src/component/motion/Arrow/MotionArrow';
import MotionUnderline from '@/src/component/motion/Underline/MotionUnderline';
import { Link } from '@/src/i18n/navigation';
import { ArrowUpRightIcon } from '@phosphor-icons/react/ssr';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { PropsWithChildren, useMemo } from 'react';
import styles from './anchor.module.scss';

type Props = PropsWithChildren<{
    href: string;
    external?: boolean;
    className?: string;
}>;

const MotionLink = motion.create(Link);

export default function Anchor({ href, className, external, children }: Props) {
    const classes = useMemo(() => {
        return clsx(styles.anchor, className);
    }, [className]);

    const Component = useMemo(() => {
        return external ? motion.a : MotionLink;
    }, [external]);

    return (
        <Component
            href={href}
            className={classes}
            target={external ? '_blank' : undefined}
            animate="initial"
            initial="initial"
            whileHover="hover"
        >
            <MotionUnderline.span>{children}</MotionUnderline.span>
            {external && <MotionArrow icon={ArrowUpRightIcon} orientation="up-right" size={18} />}
        </Component>
    );
}
