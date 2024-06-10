// /* eslint-disable no-unused-vars */

// //* functional
// import { Fragment, useLayoutEffect, useState } from "react";
// function App() {
//   const [data, setData] = useState([]);
//   const [display, setDisplay] = useState(false);
//   const STUDENT_DATA = [
//     { name: "Alex", age: 25 },
//     { name: "Peter", age: 35 },
//     { name: "John", age: 15 },
//     { name: "Falex", age: 12 },
//     { name: "marvel", age: 20 },
//   ];

//   const show = () => {
//     setDisplay(true);
//     setData(STUDENT_DATA);
//   };
//   return (
//     <Fragment>
//       <button onClick={show}>Click Here to see the list of Students</button>
//       <div className="border 1px solid green">
//         {display && (
//           <ul>
//             {data.map((item, index) => (
//               <li key={index}>{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </Fragment>
//   );
// }

// // //* Calling a function!
// // // console.log(App());

// // //* Calling a component!
// // // console.log(<App />);

// //* class based

// // import React, { Component } from "react";

// // export default class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { count: 0 };
// //     this.handleClick = this.handleClick.bind(this);
// //   }

// //   handleClick() {
// //     this.setState((state) => {
// //       return { count: state.count + 1 };
// //     });
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <button key={1} onClick={this.handleClick}>
// //           Click me!
// //         </button>
// //         <span key={2}>{this.state.count}</span>
// //       </div>
// //     );
// //   }
// // }

// //* Fibre Node

// //** {
// //** stateNode: new ClickCounter,
// //** type: ClickCounter,
// //** alternate: null,
// //** key: null,
// //** updateQueue: null,
// //** memoizedState: {count: 0},
// //** pendingProps: {},
// //** memoizedProps: {},
// //** tag: 1,
// //** effectTag: 0,
// //** nextEffect: null
// //** }

// //**  {
// //**     stateNode: new HTMLSpanElement,
// //**     type: "span",
// //**     alternate: null,
// //**     key: "2",
// //**     updateQueue: null,
// //**     memoizedState: null,
// //**     pendingProps: {children: 0},
// //**     memoizedProps: {children: 0},
// //**     tag: 5,
// //**     effectTag: 0,
// //**     nextEffect: null
// //** }

// export default App;
