import React from "react";
import App, { Container } from "next/app";

//stylings

import "semantic-ui-css/semantic.min.css";
import "../css/main.css";

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
      <Container>
        <Component {...pageProps} {...this.state} />
      </Container>
    );
  }
}
