/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ThemeContext } from "./react-hooks-components/use-Context/ThemeContext";
import Form from "./react-hooks-components/use-Context/Form";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <div className="flex gap-3">
        <button
          className=" p-3 rounded-md bg-teal-800 text-white"
          onClick={() => setTheme("light")}
        >
          Switch to Light Mode
        </button>
        <button
          className=" p-3 rounded-md bg-teal-800 text-white"
          onClick={() => setTheme("dark")}
        >
          Switch to Dark Mode
        </button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

// let story = [
//   { id: "create1", label: "anusha's story" },
//   { id: "create2", label: "asad's story" },
// ];
