'use client';

import { Icon } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { motion, Transition, Variants } from 'framer-motion';
import { useMemo } from 'react';
import styles from './MotionArrow.module.scss';

type Props = {
    icon: Icon;
    orientation: 'right' | 'up-right';
    className?: string;
    size?: string | number;
    transition?: Transition;
};

export default function MotionArrow({
    icon: Icon,
    orientation,
    className,
    size = 24,
    transition = { duration: 0.4, ease: 'easeInOut' },
}: Props) {
    const classes = useMemo(() => {
        return clsx(styles.motionArrow, className);
    }, [className]);

    const [originalVariants, shadowVariants] = useMemo<[Variants, Variants]>(() => {
        switch (orientation) {
            case 'up-right':
                return [
                    {
                        initial: { x: 0, y: 0 },
                        hover: { x: size, y: -size },
                    },
                    {
                        initial: { x: -size, y: size },
                        hover: { x: 0, y: 0 },
                    },
                ];
            case 'right':
                return [
                    {
                        initial: { x: 0 },
                        hover: { x: size },
                    },
                    {
                        initial: { x: -size },
                        hover: { x: 0 },
                    },
                ];
        }
    }, [orientation, size]);

    return (
        <span aria-hidden="true" className={classes} style={{ width: size, height: size }}>
            <motion.span className={styles.motionArrowIcon} variants={shadowVariants} transition={transition}>
                <Icon size={size} />
            </motion.span>
            <motion.span className={styles.motionArrowIcon} variants={originalVariants} transition={transition}>
                <Icon size={size} />
            </motion.span>
        </span>
    );
}
