/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
const colorSet = [
  "bg-teal-800",
  "bg-cyan-400",
  "bg-slate-600",
  "bg-zinc-800",
  "bg-green-800",
  "bg-amber-800",
  "bg-orange-800",
  "bg-purple-800",
  "bg-pink-800",
  "bg-gray-800",
];

const ChallengeOne = () => {
  const [color, setColor] = useState(colorSet);

  function changeColor() {
    const number = Math.floor(Math.random() * 10);
    setColor(colorSet[number]);
  }
  useEffect(() => {
    let id = setInterval(changeColor, 500);
    return () => clearInterval(id);
  }, [color]);
  return (
    <div className="flex justify-center items-center gap-5">
      <h1 className="text-white text-3xl font-bold text-center">
        Hey!! I am useEffect!
      </h1>
      <button className="p-2 rounded-md text-white bg-gray-900 bg cursor-pointer">
        Click me to see magic!!
      </button>

      <div
        className={`w-80 h-80 items-center mt-4 ${color} rounded-md bg-`}
      ></div>
    </div>
  );
};

export default ChallengeOne;
