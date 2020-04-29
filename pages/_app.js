import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import App, { Container } from "next/app";

//stylings

import "semantic-ui-css/semantic.min.css";
import "../css/main.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    name: "Morgan",
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <Container>
          <Component {...pageProps} {...this.state} />
        </Container>
      </>
    );
  }
}
