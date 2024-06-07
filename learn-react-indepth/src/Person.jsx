/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import ClickCounter from "./ClickCounter";
const Person = ({ person }) => {
  return (
    <div>
      <h1 className="text-3xl text-cyan-600">
        Hye..!! {person.firstname} {person.lastname}
      </h1>
      <ClickCounter />
    </div>
  );
};

export default Person;
