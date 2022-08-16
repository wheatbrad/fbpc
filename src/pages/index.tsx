import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { dbClient } from '~/utils/dbConnector';

type Player = {
    firstName: string;
    lastName: string;
    email: string;
} | null;

export const getStaticProps: GetStaticProps = async () => {
    const player = await dbClient.player.findUnique({ 
        where: { id: 1 },
        select: {
            firstName: true,
            lastName: true,
            email: true
        }
    }) as Player;

    return { props: { player } };
};

const Home: NextPage = ({ player }: InferGetStaticPropsType<typeof getStaticProps>) => {

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