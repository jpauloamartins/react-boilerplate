import * as React from "react";
import { Component } from "react";

import {
  LayoutWithHeaderAndFooter,
} from "../../layouts/LayoutWithHeaderAndFooter";

export class ReactIntro extends Component {

  render() {
    return (
      <LayoutWithHeaderAndFooter>
        <div className="container">
          <h2>React</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript
            library for building user interfaces. It lets you compose complex
            UIs from small and isolated pieces of code called “components”.
          </p>
          <a href="https://reactjs.org/community/support.html">Join
          the React Community</a>
        </div>
      </LayoutWithHeaderAndFooter>
    );
  }

}

export default ReactIntro;
