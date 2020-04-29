import { Component } from "react";
import Router from "next/router";
import MainMenu from "../Components/Header/MainMenu";
import Banner from "../Components/Home/Banner";
import Country from "../Components/Home/Country";
import CardReport from "../Components/Home/CardReport";
import Footer from "../Components/Header/Footer";
import axios from "axios";
import { BASE_URL } from "../config";
import { Button } from "semantic-ui-react";
const router = Router;
console.log(router);

export default class Home extends Component {
  static async getInitialProps() {
    let results = [];
    try {
      const response = await axios.get(`${BASE_URL}`);
      results = response.data;
      //   console.log(results);
    } catch (error) {
      //  console.log(error);
    }
    return { results, loading: false };
  }

  loadingButton() {
    if (!this.props.loading) {
      console.log("see");
      return <Button loading>Loading</Button>;
    }
  }
  render() {
    const { results } = this.props;

    //console.log(this.props.results);
    return (
      <div className="main">
        <MainMenu router={router} />
        <Banner />
        {/* {this.loadingButton()} */}
        {/* <Country /> */}
        <CardReport read={results} loading={this.loadingButton()} />
        <Footer />
      </div>
    );
  }
}
