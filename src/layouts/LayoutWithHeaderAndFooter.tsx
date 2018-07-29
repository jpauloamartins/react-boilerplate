import * as React from "react";
import { Component } from "react";

import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import "./LayoutWithHeaderAndFooterStyle";

export class LayoutWithHeaderAndFooter extends Component {

  render() {
    return (
      <div id="main">
        <Header />
        <div className="content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }

}
