import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Home</h2>
        <img
          src="/logo.png"
          alt="Summit Logo"
          style={{ width: 50, height: 50 }}
        />
      </div>
    );
  }
}

export default Home;
