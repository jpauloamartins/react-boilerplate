import * as React from "react";
import { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AsyncComponent } from "./components/AsyncComponent";
import { Home } from "./pages/Home/Home";
import { TypeScriptIntro } from "./pages/Home/TypeScriptIntro";
import { ReactIntro } from "./pages/Home/ReactIntro";

import "./assets/style/base";

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
          {/* <Route exact path="/" component={homeAsyncComponent} /> */}
          {/*<Route exact path="/typescript" component={tsAsyncComponent} /> */}
          {/* <Route exact path="/react" component={reactAsyncComponent} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/typescript" component={TypeScriptIntro} />
          <Route exact path="/react" component={ReactIntro} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export const App = hot(module)(AppBase);
