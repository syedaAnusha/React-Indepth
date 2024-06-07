/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Person from "./Person";
import ErrorBoundary from "./ErrorBoundary";
// import LifeCycleA from "./LifeCycleA";

export default class App extends Component {
  render() {
    const person = { firstname: "Anusha", lastname: "syeda" };
    return (
      <>
        <ErrorBoundary>
          <Person person={person} />
        </ErrorBoundary>
      </>
    );
  }
}
