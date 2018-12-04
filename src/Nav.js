// Create Nav.js, and populate with an <ul> that contains
// <a> for home, inputs, outputs, and viz
import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div style={{ float: "left", width: 150 }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs</Link>
          </li>
          <li>
            <Link to="/outputs">Outputs</Link>
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
