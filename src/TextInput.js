import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  // Using experimental static property
  static propTypes = {
    name: PropTypes.string.isRequired,
    displayLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    displayLabel: true
  };

  render() {
    // Destructuring to shorten calls below.
    const { name, label, value, onChange, error, displayLabel } = this.props;
    return (
      <div>
        {displayLabel && <label htmlFor={name}>{label}</label>}
        <br />
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    );
  }
}

// The original style

// TextInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayLabel: PropTypes.bool,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isRequired
// };

// TextInput.defaultProps = {
//   displayLabel: true
// };

export default TextInput;
