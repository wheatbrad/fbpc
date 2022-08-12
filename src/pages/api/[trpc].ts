import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { dbClient } from '~/utils/dbConnector';

export const appRouter = trpc.router()
    .query('getPlayerById', {
        input: z.number(),
        async resolve({ input }) {
            return await dbClient.player.findUnique({where: {id: input}});
        }
    });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null
});