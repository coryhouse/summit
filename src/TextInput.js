import React, { Component } from "react";

class TextInput extends Component {
  render() {
    // Destructuring to shorten calls below.
    const { name, label, value, onChange, error } = this.props;
    return (
      <p>
        <label htmlFor={name}>{label}</label>
        <br />
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </p>
    );
  }
}

export default TextInput;
