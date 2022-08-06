import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
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
