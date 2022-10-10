import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
// eslint-disable-next-line import/no-extraneous-dependencies
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Narmit Mashruwala</title>
        <link rel="icon" type="image/png" href="/nm-logo.png" />
        <meta
          name="keywords"
          content="narmit, mashruwala, mashru, stevens, daiict"
        />
        <meta
          name="description"
          content="This is Narmit Mashru's portfolio website"
        />
        <meta name="author" content="Narmit Mashruwala" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
