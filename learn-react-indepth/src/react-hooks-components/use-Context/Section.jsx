/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { LevelContext } from "./LevelContext";
const Section = ({ level, children }) => {
  return (
    <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
  );
};

export default Section;
