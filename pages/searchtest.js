import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment, Image } from "semantic-ui-react";

const source = _.times(200, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$"),
}));
console.log(typeof source[0].title);

const initialState = { isLoading: false, results: source, value: "" };

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    console.log(result);
  };

  handleSearchChange = (e, { value }) => {
    console.log(value);
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");

      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    console.log(results);

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
            renderer={({ image, price, title, description }) => [
              image && (
                <div key="image" className="image">
                  {createHTMLImage(image, { autoGenerateKey: false })}
                </div>
              ),
              <div key="content" className="content">
                {title && <div className="title">{title}</div>}
                {title && <div className="title">{title}</div>}
                {description && (
                  <div className="description">{description}</div>
                )}
              </div>,
            ]}
          />
          <div>
            <pre style={{ overflowX: "auto" }}>
              {this.state.results.map((i, jj) => (
                <>
                  <div key={jj}>
                    <div>{i.title}</div>
                    <br /> <div>{i.description}</div>{" "}
                    <div>
                      <Image src={i.image} size="small" />
                    </div>
                    <div>{i.price}</div>
                  </div>
                </>
              ))}
            </pre>
          </div>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: "auto" }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
