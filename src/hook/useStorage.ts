import { useEffect, useState } from 'react';

export default function useStorage<T>(key: string, defaultValue?: T) {
    const [value, setValue] = useState<T>(() => {
        const storedValue = sessionStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : defaultValue;
    });

    useEffect(() => {
        if (!value) {
            sessionStorage.removeItem(key);
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue] as const;
}
