import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Globals } from "../styles/globals";
import Head from "next/head";
import Header from "../components/header";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import Loading from "../components/loading";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        setLoading(false);
    }, []);

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
            <Globals />
            {!loading ? (
                <ThemeProvider theme={{}}>
                    <AuthProvider>
                        <div className="body_container">
                            {router.asPath !== "/login" && <Header />}
                            <Component {...pageProps} />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default MyApp;
