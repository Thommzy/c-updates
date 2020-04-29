import React from "react";
import {
  Button,
  Card,
  Image,
  Container,
  Header,
  Icon,
} from "semantic-ui-react";
import Link from "next/link";
import moment from "moment";

function addMillions(str) {
  let aa = str.toString();
  let bb = "";

  if (aa.length === 7) {
    let firstSection = aa.substring(0, 1);
    let secondSection = aa.substring(1, 4);
    let thirdSection = aa.substring(4);
    bb += `${firstSection},${secondSection},${thirdSection}`;
  }
  if (aa.length === 6) {
    let firstSection = aa.substring(0, 3);
    let secondSection = aa.substring(3);
    bb += `${firstSection},${secondSection}`;
  }
  if (aa.length === 5) {
    let firstSection = aa.substring(0, 2);
    let secondSection = aa.substring(2);
    bb += `${firstSection},${secondSection}`;
  }
  if (aa.length === 4) {
    let firstSection = aa.substring(0, 1);
    let secondSection = aa.substring(1);
    bb += `${firstSection},${secondSection}`;
  }

  return bb;
}

const CardReport = ({ read, loading }) => (
  <Container>
    <div className="cardd">
      <Card.Group className="card-main">
        {Object.keys(read).map((key, i) =>
          read[key].value || key === "lastUpdate" ? (
            <Card key={i} className="center">
              <Card.Content>
                <div className="medkit">
                  {read[key].value ? (
                    <Icon
                      className={
                        key === "confirmed"
                          ? "medkit__icon__confirmed"
                          : key === "recovered"
                          ? "medkit__icon__recovered"
                          : key === "deaths"
                          ? "medkit__icon__deaths"
                          : null
                      }
                      name="medkit"
                    ></Icon>
                  ) : null}
                </div>
                {/* <h1>{loading}</h1> */}
                <Header as="h1">
                  {key === "lastUpdate" ? "Last Update" : key}
                </Header>
                {key === "lastUpdate" ? (
                  <Header className="lightText" as="h3">
                    {moment(read[key]).format("LLLL")}
                  </Header>
                ) : null}
                {key === "confirmed" ? (
                  <Link href="/confirmed" as={`/${key}`}>
                    <Button className="button-way">Read More</Button>
                  </Link>
                ) : null}
                {key === "recovered" ? (
                  <Link href="/recovered" as={`/${key}`}>
                    <Button className="button-way">Read More</Button>
                  </Link>
                ) : null}

                {key === "deaths" ? (
                  <Link href="/deaths" as={`/${key}`}>
                    <Button className="button-way">Read More</Button>
                  </Link>
                ) : null}

                <Card.Header>
                  {read[key].value
                    ? addMillions(Number(read[key].value))
                    : null}
                </Card.Header>
              </Card.Content>
            </Card>
          ) : null
        )}
      </Card.Group>
    </div>
  </Container>
);

export default CardReport;
