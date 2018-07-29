import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LocationDescriptor } from "history";

import "./MenuItemStyle";

interface IProps {
  to: LocationDescriptor;
}

interface IState {}

export class MenuItem extends Component<IProps, IState> {

  render() {
    const { to } = this.props;

    return (
      <Link to={to}>
        { this.props.children }
      </Link>
    );
  }

}
