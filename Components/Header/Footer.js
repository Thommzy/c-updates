import React, { Component } from "react";
import Link from "next/link";
import { Grid, Image, Header } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-main">
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Header className="footer-main__text" as="h5">
                <Link href="https://twitter.com/Thommzy">
                  <a>Developed by Thommzy</a>
                </Link>
              </Header>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
