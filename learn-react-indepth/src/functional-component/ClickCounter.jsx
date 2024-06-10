/* eslint-disable no-unused-vars */
import { useState } from "react";
const MAX_COUNT = 5;
const ClickCounter = () => {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    try {
      if (increment >= MAX_COUNT) {
        throw new Error("Count Limit Exceed!");
      } else {
        setIncrement((prevInc) => prevInc + 1);
      }
    } catch (error) {
      console.log("Error Occured!!", error);
    }
  };
  return (
    <>
      <button
        className="text-2xl p-2 border-2 border-cyan-600"
        onClick={handleIncrement}
      >
        Counter {increment}
      </button>
    </>
  );
};

export default ClickCounter;
