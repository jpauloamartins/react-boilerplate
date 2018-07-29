import * as React from "react";
import { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AsyncComponent } from "./components/AsyncComponent";

const home = () => import("./pages/Home/Home");
const typeScript = () => import("./pages/Home/TypeScriptIntro");
const react = () => import("./pages/Home/ReactIntro");

const homeAsyncComponent = () => {
  return <AsyncComponent moduleProvider={home} />;
};

const tsAsyncComponent = () => {
  return <AsyncComponent moduleProvider={typeScript} />;
};

const reactAsyncComponent = () => {
  return <AsyncComponent moduleProvider={react} />;
};

export class AppBase extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={homeAsyncComponent} />
          <Route exact path="/typescript" component={tsAsyncComponent} />
          <Route exact path="/react" component={reactAsyncComponent} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export const App = hot(module)(AppBase);
