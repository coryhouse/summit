import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import ModelInputs from "./ModelInputs";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import "./App.css";

class App extends React.Component {
  state = {
    modelInputs: []
  };

  handleSaveModelInput = modelInput => {
    debugger;
    // Since setting state based on previous state, using callback form
    this.setState(state => {
      const modelInputs = [...state.modelInputs, modelInput];
      return { modelInputs };
    });
  };

  // Create a Header component with a blue background that says "Summit"
  // Display above the Nav.
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div style={{ float: "left", width: 400 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/model-inputs"
              render={props => (
                <ModelInputs onSave={this.handleSaveModelInput} />
              )}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
