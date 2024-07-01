/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//* React Imports
import { useState, useEffect } from "react";
const ChallengeTwo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return <div className="text-white text-md">hey! I am {count}</div>;
};

export default ChallengeTwo;
