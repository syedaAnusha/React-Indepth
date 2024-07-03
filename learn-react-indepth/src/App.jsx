/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ThemeContext } from "./react-hooks-components/use-Context/ThemeContext";
import Form from "./react-hooks-components/use-Context/Form";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <button onClick={() => setTheme("light")}>Switch to Light Mode</button>
      <button onClick={() => setTheme("dark")}>Switch to Dark Mode</button>
    </ThemeContext.Provider>
  );
};

export default App;

// let story = [
//   { id: "create1", label: "anusha's story" },
//   { id: "create2", label: "asad's story" },
// ];
