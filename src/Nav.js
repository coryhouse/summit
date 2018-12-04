// Create Nav.js, and populate with an <ul> that contains
// <a> for home, inputs, outputs, and viz
import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div style={{ float: "left", width: 150 }}>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/model-inputs">Model Inputs</Link>
          </li>
          <li>
            <Link to="/model-outputs">Outputs</Link>
          </li>
          <li>
            <Link to="/viz">Viz</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
