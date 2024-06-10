/* eslint-disable no-unused-vars */
//* This file is dedicated to practise useState hook only!
import { useEffect, useState } from "react";
import { DATA } from "./student_data";
import Card from "./ui/Card";

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

      <Card student={StudentDetails} />
    </div>
  );
};

export default UseState;
