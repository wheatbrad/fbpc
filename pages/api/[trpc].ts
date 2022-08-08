import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

export const appRouter = trpc
    .router()
    .query('hello', {
        input: z
            .object({
                text: z.string().nullish()
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `Hello ${input?.text ?? 'random player'}, ready to make your picks?`
            };
        }
    });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null
});