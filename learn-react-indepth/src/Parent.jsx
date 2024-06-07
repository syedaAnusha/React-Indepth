/* eslint-disable no-unused-vars */
import React from "react";

class Child extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <div>
        <p>Child Component content</p>
      </div>
    );
  }
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <div className="block text-center space-y-4 mt-24">
        <h1 className="text-3xl">Main Component</h1>
        {this.state.showComponent && <Child />}
        <button
          onClick={this.toggleComponent}
          className="border-2 border-cyan-900 text-2xl p-2"
        >
          {this.state.showComponent ? "Unmount" : "Mount"}
        </button>
      </div>
    );
  }
}
