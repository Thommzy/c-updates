import _ from "lodash";
import React, { Component } from "react";
import Router from "next/router";
import { BASE_URL } from "../config";
import axios from "axios";
import MainMenu from "../Components/Header/MainMenu";
import {
  Card,
  Image,
  Button,
  Header,
  Container,
  Input,
  Search,
} from "semantic-ui-react";
// import us from "/static/us-flag.jpg";

import moment from "moment";
const router = Router;
console.log(router);

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

export default class deaths extends Component {
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

  state = { isLoading: false, results: this.props.confirms, value: "" };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.countryRegion });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({
          isLoading: false,
          results: this.props.confirms,
          value: "",
        });

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.countryRegion);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.confirms, isMatch),
      });
    }, 300);
  };

  render() {
    const { confirms, loading } = this.props;
    const { isLoading, value, results } = this.state;
    console.log(results);
    return (
      <>
        <MainMenu router={router} />
        <div className="searchBar">
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            placeholder="Search Country"
          />
        </div>
        <Container>
          {!loading ? (
            <div className="main-confirmed">
              <Card.Group className="card-main">
                {results.map((key, i) => (
                  <Card key={i} className="center">
                    <Card.Content>
                      <Image
                        floated="right"
                        size="mini"
                        src={
                          key.countryRegion === "US"
                            ? "/static/us-flag.jpg"
                            : key.countryRegion === "Spain"
                            ? "/static/spain-flag.jpg"
                            : key.countryRegion === "Italy"
                            ? "/static/italy-flag.jpg"
                            : key.countryRegion === "France"
                            ? "/static/france-flag.jpg"
                            : key.countryRegion === "Germany"
                            ? "/static/germany-flag.gif"
                            : key.countryRegion === "United Kingdom"
                            ? "/static/uk-flag.jpg"
                            : key.countryRegion === "Turkey"
                            ? "/static/turkey-flag.jpg"
                            : key.countryRegion === "Iran"
                            ? "/static/iran-flag.jpg"
                            : key.countryRegion === "Russia"
                            ? "/static/russia-flag.jpg"
                            : key.countryRegion === "China"
                            ? "/static/china-flag.jpg"
                            : key.countryRegion === "Brazil"
                            ? "/static/brazil-flag.jpg"
                            : key.countryRegion === "Belgium"
                            ? "/static/belgium-flag.jpg"
                            : key.countryRegion === "Netherlands"
                            ? "/static/netherland-flag.jpg"
                            : key.countryRegion === "Switzerland"
                            ? "/static/switzerland-flag.jpg"
                            : key.countryRegion === "India"
                            ? "/static/india-flag.jpg"
                            : key.countryRegion === "Peru"
                            ? "/static/peru-flag.png"
                            : key.countryRegion === "Canada"
                            ? "/static/canada-flag.jpg"
                            : key.countryRegion === "Portugal"
                            ? "/static/portugal-flag.jpg"
                            : key.countryRegion === "Ecuador"
                            ? "/static/ecuador-flag.png"
                            : key.countryRegion === "Ireland"
                            ? "/static/ireland.jpg"
                            : key.countryRegion === "Nigeria"
                            ? "/static/nigeria-flag.jpg"
                            : key.countryRegion === "Ghana"
                            ? "/static/ghana-flag.jpg"
                            : null
                        }
                        className="center"
                      />
                      <Card.Description className="lowerSpace">
                        Province state:
                        <strong>{key.provinceState}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Country Region:
                        <strong>{key.countryRegion}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Last Update:
                        <strong>
                          {moment(key.lastUpdate).format("YYYY-MM-DD")}
                        </strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Deaths:
                        <strong>{addComma(key.deaths)}</strong>
                      </Card.Description>
                      <Card.Description className="lowerSpace">
                        Active:
                        <strong>{addComma(key.active)}</strong>
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
