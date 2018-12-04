import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Inputs from "./Inputs";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";

class App extends React.Component {
  // Create a Header component with a blue background that says "Summit"
  // Display above the Nav.
  render() {
    return (
      <>
        <Header />
        <Nav />
        <div style={{ float: "left", width: 400 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/inputs" component={Inputs} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
