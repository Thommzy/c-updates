import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class MainMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { router } = this.props;

    return (
      <div>
        <Menu size="mini" className="menu-header">
          <Menu.Item
            name="covid_19"
            active={activeItem === "home"}
            onClick={() => router.push("/")}
          />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Explore</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
