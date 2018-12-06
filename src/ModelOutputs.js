import React from "react";

class ModelOutputs extends React.Component {
  render() {
    return (
      <div>
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
            {this.props.modelInputs.map(modelInput => (
              <tr key={modelInput.id}>
                <td>{modelInput.name}</td>
                <td>{modelInput.description}</td>
                <td>{modelInput.date}</td>
                <td>
                  <button onClick={() => this.props.onDelete(modelInput.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ModelOutputs;
