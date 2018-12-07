import React, { useState, useEffect, useContext } from "react";
import ModelInputsContext from "./ModelInputsContext";

const ModelOutputs = props => {
  const modelInputsContext = useContext(ModelInputsContext);
  const [modelInputs, setModelInputs] = useState(
    modelInputsContext.modelInputs
  );

  useEffect(
    () => {
      setModelInputs(modelInputsContext.modelInputs);
    },
    [modelInputsContext.modelInputs]
  );

  function handleChange(id, event) {
    const updatedModelInputs = modelInputs.map(modelInput => {
      return modelInput.id === id
        ? { ...modelInput, [event.target.name]: event.target.value }
        : modelInput;
    });
    setModelInputs(updatedModelInputs);
  }

  return (
    <form onSubmit={props.onSave}>
      <h2>Outputs {modelInputsContext.testVal} </h2>
      {modelInputs.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/* NOTE: We're iteratin' over state */}
              {modelInputs.map(modelInput => (
                <tr key={modelInput.id}>
                  <td>
                    <input
                      type="text"
                      name="name"
                      onChange={event => handleChange(modelInput.id, event)}
                      value={modelInput.name}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      onChange={event => handleChange(modelInput.id, event)}
                      value={modelInput.description}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="date"
                      onChange={event => handleChange(modelInput.id, event)}
                      value={modelInput.date}
                    />
                  </td>
                  <td>
                    <button onClick={() => props.onDelete(modelInput.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => props.onUpdateAll(modelInputs)}>
            Save All
          </button>
        </>
      )}
    </form>
  );
};

export default ModelOutputs;
