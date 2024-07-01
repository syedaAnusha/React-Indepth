/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { ThemeContext } from "./react-hooks-components/use-Context/ThemeContext";
import Form from "./react-hooks-components/use-Context/Form";
export default class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="light">
        <Form />
      </ThemeContext.Provider>
    );
  }
}

// let story = [
//   { id: "create1", label: "anusha's story" },
//   { id: "create2", label: "asad's story" },
// ];
