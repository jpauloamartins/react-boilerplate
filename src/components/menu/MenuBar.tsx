import * as React from "react";
import { Component } from "react";

import "./MenuBarStyle";
import { debug } from "util";

export class MenuBar extends Component {

  render() {
    return (
      <nav>
        <div>
          { this.props.children }
        </div>
      </nav>
    );
  }

}

