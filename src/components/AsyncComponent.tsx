import * as React from "react";
import { Component, ComponentClass } from "react";
import { StrictMode } from "react";

interface IProps {
  moduleProvider: () => Promise<any>;
  loadingComponent?: ComponentClass;
}

interface IState {
  component: ComponentClass;
}

export class AsyncComponent extends Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);

    this.state = {
      component: null,
    };

    this.props.moduleProvider().then((component) => {
      this.setState({
        component: component.default,
      });
    });
  }

  render(): any {
    const { loadingComponent: LoadingC } = this.props;
    const { component: C } = this.state;

    const component = C ? <C /> : (LoadingC ? <LoadingC /> : "Loading");

    return (
      <StrictMode>
        { component }
      </StrictMode>
    );
  }

}
