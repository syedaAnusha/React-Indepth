/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ChallengeOne from "./react-hooks-components/use-state/keeping-components-pure/ChallengeOne";
export default class App extends Component {
  render() {
    return (
      <>
        <ChallengeOne time={new Date()} />
      </>
    );
  }
}
