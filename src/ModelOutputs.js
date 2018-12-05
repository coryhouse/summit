import React, { useState, useEffect } from "react";

const ModelOutputs = props => {
  const [modelInputs, setModelInputs] = useState(props.modelInputs);

  useEffect(
    () => {
      setModelInputs(props.modelInputs);
    },
    [props.modelInputs]
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
      <h2>Outputs</h2>
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
      <button onClick={() => props.onUpdateAll(modelInputs)}>Save All</button>
    </form>
  );
};

export default ModelOutputs;
