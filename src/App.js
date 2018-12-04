import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import ModelInputs from "./ModelInputs";
import ModelOutputs from "./ModelOutputs";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { save } from "./api/modelInputsApi";
import { withRouter } from "react-router-dom";
import { getAll, deleteInput } from "./api/modelInputsApi";
import "./App.css";

class App extends React.Component {
  state = {
    modelInputs: []
  };

  componentDidMount() {
    getAll().then(modelInputs => {
      this.setState({ modelInputs });
    });
  }

  handleDelete = id => {
    deleteInput(id);
    this.setState(state => {
      return { modelInputs: [...state.modelInputs.filter(i => i.id !== id)] };
    });
  };

  handleSaveModelInput = modelInput => {
    // Since setting state based on previous state, using callback form
    this.setState(state => {
      const modelInputs = [...state.modelInputs, modelInput];
      save(modelInput).then(response => {
        this.props.history.push("/model-outputs");
      });
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
            <Route
              path="/model-outputs"
              render={props => (
                <ModelOutputs
                  modelInputs={this.state.modelInputs}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
