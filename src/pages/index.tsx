import type { GetStaticProps, NextPage, PreviewData } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { dbClient } from '~/utils/dbConnector';

interface Player {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

const Home: NextPage<Player> = (player) => {

    return (
        <>
            <Head>
                <title>Family Bowl Pick'em</title>
                <meta name="description" content="The Runnels, Reeder, Krueger, and Trehern families vie for the annual college football bowl pick'em championship." />
            </Head>
            <h1>2022 Family Bowl Pick'em</h1>
            <p>{`Welcome ${player?.firstName || 'player'}, ready to make your picks?`}</p>
        </>
    );
};


export default Home;

export const getStaticProps: GetStaticProps<Player, ParsedUrlQuery, PreviewData> = async () => {
    const player = await dbClient.player.findUnique({ where: { id: 1}});

    return { props: {
        id: player?.id,
        firstName: player?.firstName,
        lastName: player?.lastName,
        email: player?.email
    } as Player };
};