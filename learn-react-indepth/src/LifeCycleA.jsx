/* eslint-disable no-unused-vars */
//* This code is used to practise the lifeCycle Methods - Mounting phase!

import React, { Component } from "react";
import LifeCycleAChild from "./LifeCycleAChild";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "anusha",
    };
    console.log("LifeCycleA Construtor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount!");
  }

  render() {
    console.log("LifeCycleA render Method called!");
    return (
      <div className="text text-cyan-800 font-extrabold text-2xl">
        Hey I am LifeCycle A
        <LifeCycleAChild />
      </div>
    );
  }
}

export default LifeCycleA;
