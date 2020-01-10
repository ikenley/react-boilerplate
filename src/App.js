import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="py-5 px-3 text-center">
          <h1>Open the pod bay doors, HAL</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
