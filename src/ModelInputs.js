import React, { Component } from "react";
import TextInput from "./TextInput";

class ModelInputs extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: "",
  //       description: "",
  //       date: ""
  //     };
  //   }

  // Class field. Stage 3 feature: https://github.com/tc39/proposal-class-fields
  state = {
    name: "",
    description: "",
    date: "",
    errors: {}
  };

  // Class field with arrow function
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSave = event => {
    event.preventDefault();

    const errors = {};

    // validate submitted data
    if (this.state.name === "") {
      errors.name = "Hey, enter a name. 😀";
    }

    if (this.state.description === "") {
      errors.description = "Hey, enter a description. 😜";
    }

    if (this.state.date === "") {
      errors.date = "Hey, enter a date. 📆";
    }

    const errorsExist = Object.keys(errors).length > 0;

    if (errorsExist) {
      return this.setState({ errors: errors });
    }

    this.props.onSave({
      name: this.state.name,
      description: this.state.description,
      date: this.state.date
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <h2>Model Inputs</h2>

        <TextInput
          name="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          error={this.state.errors.name}
        />

        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
          />
          {this.state.errors.description && (
            <div style={{ color: "red" }}>{this.state.errors.description}</div>
          )}
        </div>

        <TextInput
          name="date"
          value={this.state.date}
          label="Date"
          onChange={this.handleChange}
          error={this.state.errors.date}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ModelInputs;
