/* eslint-disable no-unused-vars */

//* functional
// import { Fragment, useState } from "react";
// function App() {
//   const [inc, setInc] = useState(0);
//   const [dec, setDec] = useState(0);

//   const IncrementCounter = () => {
//     // setInc(inc + 1);
//     setInc(inc + 1);
//     setInc((prev) => prev + 1);
//     setInc((prev) => prev + 1);

//     console.log(inc);
//   };
//   const decrementCounter = () => {
//     setDec(dec - 1);
//   };
//   return (
//     <Fragment>
//       <div>
//         <button
//           onClick={IncrementCounter}
//           className="border 1px solid bg-green-600 p-1 cursor-pointer"
//         >
//           Increment Counter {inc}
//         </button>
//       </div>
//       <button
//         onClick={decrementCounter}
//         className="border 1px solid bg-green-600 p-1 cursor-pointer"
//       >
//         Decrement Counter {dec}
//       </button>
//     </Fragment>
//   );
// }

// //* Calling a function!
// // console.log(App());

// //* Calling a component!
// // console.log(<App />);

//* class based

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <button key={1} onClick={this.handleClick}>
          Click me!
        </button>
        <span key={2}>{this.state.count}</span>
      </div>
    );
  }
}

//* Fibre Node

//** {
//** stateNode: new ClickCounter,
//** type: ClickCounter,
//** alternate: null,
//** key: null,
//** updateQueue: null,
//** memoizedState: {count: 0},
//** pendingProps: {},
//** memoizedProps: {},
//** tag: 1,
//** effectTag: 0,
//** nextEffect: null
//** }

//**  {
//**     stateNode: new HTMLSpanElement,
//**     type: "span",
//**     alternate: null,
//**     key: "2",
//**     updateQueue: null,
//**     memoizedState: null,
//**     pendingProps: {children: 0},
//**     memoizedProps: {children: 0},
//**     tag: 5,
//**     effectTag: 0,
//**     nextEffect: null
//** }

// export default App;
