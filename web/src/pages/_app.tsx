import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import Header from "../components/header";
import { AuthProvider } from "../context/auth";
import ProtectedRoute from "../router";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { themeDefault } from "../styles/theme";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(true);

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
            <ChakraProvider theme={themeDefault}>
                {!loading ? (
                    <ThemeProvider theme={{}}>
                        <AuthProvider>
                            <ProtectedRoute router={router}>
                                <div className="body_container">
                                    {!["/login", "/register"].includes(
                                        router.asPath
                                    ) && <Header />}
                                    <Component {...pageProps} />
                                </div>
                            </ProtectedRoute>
                        </AuthProvider>
                    </ThemeProvider>
                ) : (
                    <Spinner />
                )}
            </ChakraProvider>
        </>
    );
};

export default MyApp;
