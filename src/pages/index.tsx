import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
    const hello = trpc.useQuery(['hello', { text: 'Brad' }]);
    return (
        <>
            <Head>
                <title>Family Bowl Pick'em</title>
                <meta name="description" content="The Runnels, Reeder, Krueger, and Trehern families vie for the annual college football bowl pick'em championship." />
            </Head>
            <h1>2022 Family Bowl Pick'em</h1>
            <p>{hello.data?.greeting}</p>
        </>
    );
};

export default Home;
