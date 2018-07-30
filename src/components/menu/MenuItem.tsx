import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink exact to={to}>
        { this.props.children }
      </NavLink>
    );
  }

}
