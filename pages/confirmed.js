import React, { Component } from "react";
import Router from "next/router";
import { BASE_URL } from "../config";
import axios from "axios";
import MainMenu from "../Components/Header/MainMenu";
import { Card, Image, Button, Header, Container } from "semantic-ui-react";
// import us from "/static/us-flag.jpg";

import moment from "moment";
const router = Router;
//console.log(router);

function addComma(str) {
  let aa = str.toString().split("");
  if (aa.length === 7) {
    aa.splice(1, 0, ",");
  }
  if (aa.length === 6) {
    aa.splice(3, 0, ",");
  }
  if (aa.length === 5) {
    aa.splice(2, 0, ",");
  }
  if (aa.length === 4) {
    aa.splice(1, 0, ",");
  }
  if (aa.length === 3) {
    aa;
  }

  return aa.join("");
}

export default class confirmed extends Component {
  static async getInitialProps() {
    let confirms = [];
    try {
      const response = await axios.get(`${BASE_URL}/confirmed`);
      confirms = response.data;
      // console.table(confirms);
    } catch (error) {
    //  console.log(error);
    }
    return { confirms, loading: false };
  }
  componentDidMount() {
   // console.log("Yay");
  }

  // renderConfirmed(confirms) {
  //   return confirms.map((key) => {
  //     //  console.log(confirms);
  //     return confirms;
  //   });
  // }
  render() {
    const { confirms, loading } = this.props;
   // console.log(!loading);
    return (
      <>
        <MainMenu router={router} />
        <Container>
          {!loading ? (
            <div className="main-confirmed">
              <Card.Group className="card-main">
                {Object.keys(confirms).map((key, i) => (
                  <Card key={i} className="center">
                    <Card.Content>
                      <Image
                        floated="right"
                        size="mini"
                        src={
                          confirms[key].countryRegion === "US"
                            ? "/static/us-flag.jpg"
                            : confirms[key].countryRegion === "Spain"
                            ? "/static/spain-flag.jpg"
                            : confirms[key].countryRegion === "Italy"
                            ? "/static/italy-flag.jpg"
                            : confirms[key].countryRegion === "France"
                            ? "/static/france-flag.jpg"
                            : confirms[key].countryRegion === "Germany"
                            ? "/static/germany-flag.gif"
                            : confirms[key].countryRegion === "United Kingdom"
                            ? "/static/uk-flag.jpg"
                            : confirms[key].countryRegion === "Turkey"
                            ? "/static/turkey-flag.jpg"
                            : confirms[key].countryRegion === "Iran"
                            ? "/static/iran-flag.jpg"
                            : confirms[key].countryRegion === "Russia"
                            ? "/static/russia-flag.jpg"
                            : confirms[key].countryRegion === "China"
                            ? "/static/china-flag.jpg"
                            : confirms[key].countryRegion === "Brazil"
                            ? "/static/brazil-flag.jpg"
                            : confirms[key].countryRegion === "Belgium"
                            ? "/static/belgium-flag.jpg"
                            : confirms[key].countryRegion === "Netherlands"
                            ? "/static/netherland-flag.jpg"
                            : confirms[key].countryRegion === "Switzerland"
                            ? "/static/switzerland-flag.jpg"
                            : confirms[key].countryRegion === "India"
                            ? "/static/india-flag.jpg"
                            : confirms[key].countryRegion === "Peru"
                            ? "/static/peru-flag.png"
                            : confirms[key].countryRegion === "Canada"
                            ? "/static/canada-flag.jpg"
                            : confirms[key].countryRegion === "Portugal"
                            ? "/static/portugal-flag.jpg"
                            : confirms[key].countryRegion === "Ecuador"
                            ? "/static/ecuador-flag.png"
                            : confirms[key].countryRegion === "Ireland"
                            ? "/static/ireland.jpg"
                            : confirms[key].countryRegion === "Nigeria"
                            ? "/static/nigeria-flag.jpg"
                            : confirms[key].countryRegion === "Ghana"
                            ? "/static/ghana-flag.jpg"
                            : null
                        }
                        className="center"
                      />
                      <Card.Description className="lowerSpace">
                        Province state:
                        <strong>{confirms[key].provinceState}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Country Region:
                        <strong>{confirms[key].countryRegion}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Last Update:
                        <strong>
                          {moment(confirms[key].lastUpdate).format(
                            "YYYY-MM-DD"
                          )}
                        </strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Confirmed:
                        <strong>{addComma(confirms[key].confirmed)}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Active:
                        <strong>{addComma(confirms[key].active)}</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="red">
                          ||
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </Container>
      </>
    );
  }
}
