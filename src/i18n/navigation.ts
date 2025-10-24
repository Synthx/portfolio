import { routing } from '@/src/i18n/routing';
import { createNavigation } from 'next-intl/navigation';

export const { Link, usePathname } = createNavigation(routing);
