/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
function App() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);

  const IncrementCounter = () => {
    // setInc(inc + 1);
    setInc((prev) => prev + 1);
    setInc((prev) => prev + 1);

    console.log(inc);
  };
  const decrementCounter = () => {
    setDec(dec - 1);
  };
  return (
    <Fragment>
      <div>
        <button
          onClick={IncrementCounter}
          className="border 1px solid bg-green-600 p-1 cursor-pointer"
        >
          Increment Counter {inc}
        </button>
      </div>
      <button
        onClick={decrementCounter}
        className="border 1px solid bg-green-600 p-1 cursor-pointer"
      >
        Decrement Counter {dec}
      </button>
    </Fragment>
  );
}

//* Calling a function!
// console.log(App());

//* Calling a component!
// console.log(<App />);

export default App;
