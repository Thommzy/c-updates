import { Component } from "react";
import Router from "next/router";
import MainMenu from "../Components/Header/MainMenu";
import Banner from "../Components/Home/Banner";
import Country from "../Components/Home/Country";
import CardReport from "../Components/Home/CardReport";
import Footer from "../Components/Header/Footer";
import axios from "axios";
import { BASE_URL } from "../config";
const router = Router;
//console.log(router);

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
    return { results };
  }

  // renderResults(results) {
  //   return Object.keys(results).map((key) => {
  //     //console.log(results);
  //     return results;
  //   });
  // }
  render() {
    const { results } = this.props;
    //console.log(this.props.results);
    return (
      <div className="main">
        <MainMenu router={router} />
        <Banner />
        {/* <Country /> */}
        <CardReport read={results} />
        <Footer />
      </div>
    );
  }
}
