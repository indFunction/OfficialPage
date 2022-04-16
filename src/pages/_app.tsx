import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Theme } from 'components/Theme';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

                <meta property='author' content='独立関数：独立定義虚構関数 / indFunction: indDef.voidFunction' />

                <meta property='og:site_name' content='独立関数' />
                <meta property='og:url' content={`https://indFunction.work${router.asPath}`} />
                <meta property='og:image' content='/hero_A.png' />

                <link rel='icon' href='/favicon.ico' />
                <link rel='shortcut' href='/icon.png' />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
