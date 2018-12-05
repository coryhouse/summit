import React, { useState, useEffect } from "react";
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

function App(props) {
  const [modelInputs, setModelInputs] = useState([]);

  useEffect(() => {
    getAll().then(modelInputs => {
      setModelInputs(modelInputs);
    });
  }, []);

  //   componentDidMount() {
  //     getAll().then(modelInputs => {
  //       this.setState({ modelInputs });
  //     });
  //   }

  function handleDelete(id) {
    deleteInput(id);
    setModelInputs([...modelInputs.filter(i => i.id !== id)]);
  }

  async function handleSaveModelInput(modelInput) {
    const savedModelInput = await save(modelInput);
    setModelInputs([...modelInputs, savedModelInput]);
    props.history.push("/model-outputs");
  }

  // Create a Header component with a blue background that says "Summit"
  // Display above the Nav.
  return (
    <div className="App">
      <Header />
      <Nav />
      <div style={{ float: "left", width: 400 }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/model-inputs"
            render={props => <ModelInputs onSave={handleSaveModelInput} />}
          />
          <Route
            path="/model-outputs"
            render={props => (
              <ModelOutputs modelInputs={modelInputs} onDelete={handleDelete} />
            )}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
