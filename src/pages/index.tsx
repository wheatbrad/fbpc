import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '~/utils/trpc';

const Home: NextPage = () => {
    const player = trpc.useQuery(['getPlayerById', 1]);

    return (
        <>
            <Head>
                <title>Family Bowl Pick'em</title>
                <meta name="description" content="The Runnels, Reeder, Krueger, and Trehern families vie for the annual college football bowl pick'em championship." />
            </Head>
            <h1>2022 Family Bowl Pick'em</h1>
            <p>{`Welcome ${player.data?.firstName || 'player'}, ready to make your picks?`}</p>
        </>
    );
};

export default Home;
