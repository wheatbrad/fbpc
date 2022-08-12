import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../pages/api/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();