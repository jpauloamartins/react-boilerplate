import * as React from "react";
import { Component } from "react";

import {
  LayoutWithHeaderAndFooter,
} from "../../layouts/LayoutWithHeaderAndFooter";

export class TypeScriptIntro extends Component {

  render() {
    return (
      <LayoutWithHeaderAndFooter>
        <div className="container">
          <h2>What is TypeScript?</h2>
          <p>
            TypeScript is a typed superset of JavaScript that compiles to
            plain JavaScript.
          </p>
          <a href="https://www.typescriptlang.org/community/index.html">Join
          the TypeScript Community</a>
        </div>
      </LayoutWithHeaderAndFooter>
    );
  }

}

export default TypeScriptIntro;
