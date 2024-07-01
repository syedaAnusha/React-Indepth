/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

//* React Imports

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  if (theme === "dark") {
    return <button className="text-white p-3">{children}</button>;
  } else {
    return <button className="text-black p-3">{children}</button>;
  }
};

export default Button;
