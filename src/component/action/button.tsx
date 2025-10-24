import { clsx } from 'clsx';
import { PropsWithChildren, useMemo } from 'react';
import styles from './action.module.scss';

type Props = PropsWithChildren<{
    disabled?: boolean;
    type?: 'button';
}>;

export default function Button({ disabled, type = 'button', children }: Props) {
    const classes = useMemo(() => {
        return clsx(styles.button, {});
    }, []);

    return (
        <button className={classes} disabled={disabled} type={type}>
            {children}
        </button>
    );
}
