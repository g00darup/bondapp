import React from "react";
import { useCalContext } from "./InputProvider";

const Inputs = () => {
  const [ins, setIns] = useCalContext();

  const handleLeftInputChange = (e) => {
    setIns({
      ...ins,
      leftSide: e.target.value,
    });
  };

  const handleRightInputChange = (e) => {
    setIns({
      ...ins,
      rightSide: e.target.value,
    });
  };

  return (
    <div>
      <label>
        Left side
        <input
          value={ins.leftSide}
          onChange={handleLeftInputChange}
        />
      </label>
      <label>
        Right side
        <input
          value={ins.rightSide}
          onChange={handleRightInputChange}
        />
      </label>
      <label>
        Result
        <input value={ins.result} readOnly />
      </label>
    </div>
  );
}

export default Inputs;