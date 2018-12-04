import React, { Component } from "react";

class Inputs extends Component {
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
    date: ""
  };

  // Class field with arrow function
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <h2>Inputs</h2>
        <p>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <br />
          <input
            type="text"
            id="date"
            value={this.state.date}
            name="date"
            onChange={this.handleChange}
          />
        </p>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Inputs;
