/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

//* React Imports
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Panel = ({ mode, children }) => {
  const theme = useContext(ThemeContext);
  if (theme === "dark") {
    return (
      <section>
        <h1 className="text-white text-3xl ">Hey I am {mode} mode!</h1>
        {children}
      </section>
    );
  } else {
    return (
      <section>
        <h1 className="text-black text-3xl ">{mode}</h1>
        {children}
      </section>
    );
  }
};

export default Panel;
