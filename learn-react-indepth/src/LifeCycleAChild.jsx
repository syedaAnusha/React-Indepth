/* eslint-disable no-unused-vars */
//* This code is used to practise the lifeCycle Methods - Mounting phase!

import React, { Component } from "react";

class LifeCycleAChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "anusha",
    };
    console.log("LifeCycleAChild Construtor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleAChild getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleAChild componentDidMount!");
  }
  render() {
    console.log("LifeCycleAChild render Method called!");
    return (
      <div className="text text-cyan-800 font-extrabold text-2xl">
        Hey I am LifeCycleA Child!
      </div>
    );
  }
}

export default LifeCycleAChild;
