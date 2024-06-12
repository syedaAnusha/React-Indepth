/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditContact({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <main className="flex flex-col justify-center items-center m-3">
      <section className="flex gap-2 ">
        <label className="border-2 border-cyan-700">
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              handleSetName(e);
            }}
            className="active:outline-none focus:outline-none"
          />
        </label>
        <label className="border-2 border-cyan-700">
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleSetEmail(e);
            }}
            className="active:outline-none focus:outline-none"
          />
        </label>
        <button
          className="border-2 border-cyan-700  p-2 rounded-md"
          onClick={() => {
            const updatedData = {
              id: initialData.id,
              name: name,
              email: email,
            };
            onSave(updatedData);
          }}
        >
          Save
        </button>
        <button
          className="border-2 border-cyan-700 p-2 rounded-md"
          onClick={() => {
            setName(initialData.name);
            setEmail(initialData.email);
          }}
        >
          Reset
        </button>
      </section>
    </main>
  );
}
