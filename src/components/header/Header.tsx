import * as React from "react";
import { Component } from "react";

import { MenuBar } from "./../menu/MenuBar";
import { MenuItem } from "./../menu/MenuItem";

export class Header extends Component {

  render() {
    return (
      <header>
        <MenuBar>
          <div className="logo" slot="header">react-boilerplate</div>
          <div className="menu-links" slot="links">
            <MenuItem to="/">About</MenuItem>
            <MenuItem to="/typescript">TypeScript</MenuItem>
            <MenuItem to="/react">React</MenuItem>
          </div>
        </MenuBar>
      </header>
    );
  }

}
