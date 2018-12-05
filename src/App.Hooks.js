import React, { useReducer, useEffect } from "react";
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

const initialState = {
  modelInputs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "loadModelInputs":
      return { modelInputs: action.payload };
    case "saveModelInput":
      return { modelInputs: [...state.modelInputs, action.payload] };
    case "deleteModelInput":
      return {
        modelInputs: [...state.modelInputs.filter(i => i.id !== action.payload)]
      };
    default:
      return state;
  }
}

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAll().then(modelInputs => {
      dispatch({ type: "loadModelInputs", payload: modelInputs });
    });
  }, []);

  function handleDelete(id) {
    deleteInput(id);
    dispatch({ type: "deleteModelInput", payload: id });
  }

  async function handleSaveModelInput(modelInput) {
    const savedModelInput = await save(modelInput);
    dispatch({ type: "saveModelInput", payload: savedModelInput });
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
              <ModelOutputs
                modelInputs={state.modelInputs}
                onDelete={handleDelete}
              />
            )}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
