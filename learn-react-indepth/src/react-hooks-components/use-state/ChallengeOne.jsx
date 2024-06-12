/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="border-2 border-gray-700"
    />
  );
}
const ChallengeOne = () => {
  const [showHint, setShowHint] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center m-3">
      <div>
        {showHint && (
          <p>
            <i>Hint: Your favorite city?</i>
          </p>
        )}

        <Form />
        <button
          className="rounded-md border-2 whitespace-nowrap p-1 w-20 border-cyan-800 hover:bg-cyan-950 hover:text-white"
          onClick={() => {
            setShowHint((prevFlag) => !prevFlag);
          }}
        >
          {showHint ? "Hide hint" : "Show Hint"}
        </button>
      </div>
    </main>
  );
};

export default ChallengeOne;
