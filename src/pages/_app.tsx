import 'src/styles/globals.css';
import Head from 'next/head';
import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from './api/[trpc]';

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1' />
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='icon' href='/icon.svg' type='image/svg+xml' />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default withTRPC<AppRouter>({
    config() {
        return { url: 'http://localhost:3000/api' };
    },
    ssr: true
})(MyApp);