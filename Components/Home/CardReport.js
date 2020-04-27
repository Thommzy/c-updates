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

const date = moment("2018-10-03T05:00:00.000+0000");

//console.log(date.format("LLLL"));

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

const CardReport = ({ read }) => (
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
                <Header as="h1">
                  {key === "lastUpdate" ? "Last Update" : key}
                </Header>
                {key === "lastUpdate" ? (
                  <Header className="lightText" as="h3">
                    {" "}
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
                  {read[key].value ? addComma(Number(read[key].value)) : null}
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
