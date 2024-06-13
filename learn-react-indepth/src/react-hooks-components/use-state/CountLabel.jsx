/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function CountLabel({ count }) {
  const [prevCount, setprevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (prevCount !== count) {
    console.log("Enter in CountLabel IF block!");
    setprevCount(count);
    setTrend(
      count > prevCount ? "The count is Increasing" : "The count is Decreasing"
    );
  }

  return (
    <>
      <h1 className="text-white">{count}</h1>
      <h1 className="text-white">{trend}</h1>
    </>
  );
}
