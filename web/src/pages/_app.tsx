import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="titla, meta, nextjs" />
                <meta name="author" content="Syamlal CM" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Social Network</title>
            </Head>
            <ThemeProvider theme={{}}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
