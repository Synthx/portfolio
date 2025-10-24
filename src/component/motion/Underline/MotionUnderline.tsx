'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { FC, JSX, useMemo } from 'react';
import styles from './MotionUnderline.module.scss';

type Props<T extends keyof JSX.IntrinsicElements> = {
    className?: string;
} & JSX.IntrinsicElements[T];

const createMotionUnderline = <T extends keyof JSX.IntrinsicElements>(Tag: T) => {
    const MotionComponent: FC<Props<T>> = ({ className, children, ...props }) => {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const Component = Tag as any;

        const classes = useMemo(() => {
            return clsx(styles.motionUnderline, className);
        }, [className]);

        return (
            <Component className={classes} {...props}>
                {children}
                <motion.span
                    aria-hidden="true"
                    className={styles.motionUnderlineLine}
                    variants={{
                        initial: { scaleX: 0, transformOrigin: 'right' },
                        hover: { scaleX: 1, transformOrigin: 'left' },
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                />
            </Component>
        );
    };

    MotionComponent.displayName = `Motion${String(Tag)}`;

    return MotionComponent;
};

const MotionUnderline = {
    span: createMotionUnderline('span'),
    h1: createMotionUnderline('h1'),
    h2: createMotionUnderline('h2'),
};

export default MotionUnderline;
