/* eslint-disable no-unused-vars */
const ReactX = (() => {
  const useState = (initialValue) => {
    let state = initialValue;
    const setState = (newValue) => {
      state = newValue;
    };
    return [state, setState];
  };
  return useState;
})();

const { useState } = ReactX;
const Component = () => {
  let [counterValue, setCounterValue] = useState(1);
  console.log(counterValue);
};

Component();
