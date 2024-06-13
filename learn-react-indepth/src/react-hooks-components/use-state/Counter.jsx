/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import CountLabel from "./CountLabel";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Enter in Counter!");
  return (
    <main className="flex flex-col justify-center items-center m-3 gap-2">
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-md border-2 whitespace-nowrap p-1 w-25 border-cyan-800 hover:bg-cyan-950 hover:text-white"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="rounded-md border-2 whitespace-nowrap p-1 w-25 border-cyan-800 hover:bg-cyan-950 hover:text-white"
      >
        Decrement
      </button>

      <CountLabel count={count} />
    </main>
  );
}
