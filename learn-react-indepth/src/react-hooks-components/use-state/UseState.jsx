/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//* This file is dedicated to practise useState hook only!
import { useEffect, useState } from "react";
import { DATA } from "../../student_data";
import Card from "../ui/Card";
import { Block } from "../ui/Block";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      task: `I am todo no: ${i + 1}`,
    });
  }
  return initialTodos;
}

//* Child Component
const Todos = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  const [version, setVersion] = useState(0);

  // useEffect(() => {
  // , { id: todos.length, task: text }
  //   setTodos([...todos]);
  // }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center m-3">
        <label htmlFor="task" className="text-xl font-medium">
          Create New Task
        </label>
        <section className="gap-2 flex items-center">
          <input
            type="text"
            name="addTask"
            id="task"
            className="border-2 border-gray-800 p-2 w-80 mt-5 mb-5"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <button
            className="rounded-md border-2 p-1 w-20 border-cyan-800 hover:bg-cyan-950 hover:text-white"
            onClick={() => {
              if (text.length !== 0)
                setTodos([...todos, { id: todos.length, task: text }]);
            }}
          >
            Add
          </button>
          {/* <button
            className="rounded-md border-2 p-1 w-20 border-cyan-800 hover:bg-cyan-950 hover:text-white"
            onClick={() => {
              console.log(version);
              setVersion(version + 1);
            }}
          >
            Reset
          </button> */}
        </section>
        <Block value={todos} />
        {/* <Form key={version} /> */}
      </main>
    </>
  );
};

// function Form() {
//   const [name, setName] = useState("Taylor");

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <p>Hello, {name}.</p>
//     </>
//   );
// }

//* Main/Parent Component
const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [StudentDetails, setStudentDetails] = useState([]);

  //* I’ve updated the state, but the screen doesn’t update
  //   useEffect(() => {
  //     let getStudentData = DATA[0];
  //     getStudentData.age = 10; //*    🚩 Wrong: mutating existing object
  //     setStudentDetails(DATA); //*   🚩 Wrong: passing mutated object!
  //     setStudentDetails([...DATA]);
  //   }, [StudentDetails]);
  //! In above Code, dependency array => [studentDetails], will run infinitely!

  useEffect(() => {
    let getStudentData = DATA[0];
    getStudentData.age = 150;
    setStudentDetails([...DATA]); //* 🌳 Correct!
  }, []);

  const handleClickCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center  m-3">
      <h1 className="text-3xl font-black">Hey!! I am useState!</h1>

      <section className="p-12 flex gap-8">
        <button
          className="p-2 border-2 border-gray-800 rounded-md bg-slate-800 text-white"
          onClick={() => handleClickCounter()} //* 🌳 Correct!
          //   onClick={() => {                //* 🌳 Correct!
          //     setCounter((prev) => prev + 1);
          //   }}
          //   onClick={setCounter((prev) => prev + 1)} //* 🚩 Wrong
          //   onClick={handleClickCounter()} //* 🚩 Wrong
        >
          Increment
        </button>
        <h2 className="text-2xl font-semibold">{counter}</h2>
        <button
          className="p-2 border-2 border-gray-800 rounded-md bg-slate-800 text-white"
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
      </section>

      <Card value={StudentDetails} />
      <Todos />
    </div>
  );
};

export default UseState;
