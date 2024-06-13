/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function ChallengeOne({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "text-cyan-200";
  } else {
    className = "text-cyan-50";
  }
  return <h1 className={`${className}`}>{time.toLocaleTimeString()}</h1>;
}
