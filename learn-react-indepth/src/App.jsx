/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ChallengeTwo from "./react-hooks-components/use-state/keeping-components-pure/ChallengeTwo";

export default class App extends Component {
  render() {
    let story = [
      { id: "create1", label: "anusha's story" },
      { id: "create2", label: "asad's story" },
    ];
    return (
      <>
        <ChallengeTwo stories={story} />
      </>
    );
  }
}
