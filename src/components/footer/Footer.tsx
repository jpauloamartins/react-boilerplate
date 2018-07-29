import * as React from "react";
import { Component } from "react";

import "./FooterStyle";

export class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="left">
          <a
            className="join-react"
            href="https://reactjs.org/community/support.html"
          >
            Join React Community!
          </a>
        </div>
        <div className="right">
          <a
            href="https://github.com/kadro/react-boilerplate"
            className="github"
          />
          <a
            href="https://reactjs.org/"
            className="react"
          />
        </div>
      </footer>
    );
  }

}
