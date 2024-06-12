/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
const ChallengeTwo = () => {
  const [reverse, setReverse] = useState(false);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" key="lastname" />
        <Field label="First name" key="firstname" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" key="firstname" />
        <Field label="Last name" key="lastname" />
        {checkbox}
      </>
    );
  }
};

export default ChallengeTwo;
