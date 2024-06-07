/* eslint-disable no-unused-vars */
//* This code is used to practise the lifeCycle Methods - Mounting phase!

import React, { Component } from "react";
import LifeCycleAChild from "./LifeCycleAChild";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // console.log("LifeCycleA Construtor");
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("LifeCycleA getDerivedStateFromProps");
  //   return null;
  // }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount!");
    // setTimeout(() => {
    //   console.log("Data Loaded!");
    // }, 3000);
  }

  // shouldComponentUpdate() {
  //   console.log("LifeCycleA ShouldComponentUpdate!");
  //   return true;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("LifeCycleA getSnapShotBeforeUpdate");
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleA componentDidUpdate!");
    if (this.state.count !== prevState.count) {
      console.log("counter updated :", this.state.count);
    }
  }
  changeOnClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("LifeCycleA render Method called!");
    return (
      <>
        <button
          className="text text-cyan-800 font-extrabold text-2xl border-4 border-cyan-800"
          onClick={this.changeOnClick}
        >
          Click me!
        </button>
      </>
    );
  }
}

export default LifeCycleA;
