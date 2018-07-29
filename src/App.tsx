import * as React from "react";
import { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { TypeScriptIntro } from "./pages/Home/TypeScriptIntro";
import { ReactIntro } from "./pages/Home/ReactIntro";

export class AppBase extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/typescript" component={TypeScriptIntro}/>
                <Route exact path="/react" component={ReactIntro}/>
            </Switch>
        );
    }

}

export const App = hot(module)(AppBase);