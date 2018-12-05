import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import ModelInputs from "./ModelInputs";
import ModelOutputs from "./ModelOutputs";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { save, saveAll } from "./api/modelInputsApi";
import { withRouter } from "react-router-dom";
import { getAll, deleteInput } from "./api/modelInputsApi";
import ModelInputsContext from "./ModelInputsContext";
import "./App.css";

function App(props) {
  const [modelInputs, setModelInputs] = useState([]);

  useEffect(() => {
    getAll().then(modelInputs => {
      setModelInputs(modelInputs);
    });
  }, []);

  function handleDelete(id) {
    deleteInput(id);
    setModelInputs([...modelInputs.filter(i => i.id !== id)]);
  }

  async function handleAddModelInput(modelInput) {
    const savedModelInput = await save(modelInput);
    setModelInputs([...modelInputs, savedModelInput]);
    props.history.push("/model-outputs");
  }

  async function handleUpdateAllModelInputs(modelInputs) {
    const savedInputs = await saveAll(modelInputs);
    setModelInputs([...savedInputs]);
    alert("Saved. 😳");
  }

  // Create a Header component with a blue background that says "Summit"
  // Display above the Nav.
  return (
    <ModelInputsContext.Provider
      value={{ modelInputs: modelInputs, testVal: 42 }}
    >
      <div className="App">
        <Header />
        <Nav />
        <div style={{ float: "left", width: 400 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/model-inputs"
              render={props => <ModelInputs onSave={handleAddModelInput} />}
            />
            <Route
              path="/model-outputs"
              render={props => (
                <ModelOutputs
                  onDelete={handleDelete}
                  onUpdateAll={handleUpdateAllModelInputs}
                />
              )}
            />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </ModelInputsContext.Provider>
  );
}

export default withRouter(App);
