import * as React from "react";
import { Component } from "react";

import {
  LayoutWithHeaderAndFooter,
} from "../../layouts/LayoutWithHeaderAndFooter";

export class Home extends Component {

  render() {
    return (
      <LayoutWithHeaderAndFooter>
        <div className="container">
          <h2>Hello World</h2>
          <p>
            This boilerpate was created with the goal of simplify the
            development of React applications with TypeScript and all the major
            libraries for a large app.
          </p>
          <p>
            More information about the project structure can be found on the
            <a href="https://github.com/kadro/react-boilerplate"> README.md </a>
            file.
          </p>
          <p>
            If you have any questions or feature requests don't hesitate to
            open an issue.
          </p>
        </div>
      </LayoutWithHeaderAndFooter>
    );
  }

}

export default Home;
