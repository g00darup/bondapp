import React from "react";
import { useCalContext } from "./InputProvider";
import Operate from "./Operate";

const Operations = () => {
  const [ins, setIns] = useCalContext();

  function clickAddHandler() {
    setIns({
      ...ins,
      result: Operate(ins.leftSide, ins.rightSide, "+"),
    });
  }
  function clickMinusHandler() {
    setIns({
      ...ins,
      result: Operate(ins.leftSide, ins.rightSide, "-"),
    });
  }
  function clickMultiplyHandler() {
    setIns({
      ...ins,
      result: Operate(ins.leftSide, ins.rightSide, "*"),
    });
  }
  function clickDividekHandler() {
    setIns({
      ...ins,
      result: Operate(ins.leftSide, ins.rightSide, "/"),
    });
  }

  function clickResetInputHandler() {
    setIns({
      ...ins,
      leftSide: "0",
      rightSide: "0",
    });
  }

  function clickResetResultHandler() {
    setIns({
      ...ins,
      result: 0,
    });
  }

  return (
    <div>
      <br />
      <button onClick={clickAddHandler}>Add</button>
      <button onClick={clickMinusHandler}>Minus</button>
      <button onClick={clickMultiplyHandler}>Multiply</button>
      <button onClick={clickDividekHandler}>Divide</button>
      <br />
      <button onClick={clickResetInputHandler}>Reset Input</button>
      <button onClick={clickResetResultHandler}>Reset Result</button>
    </div>
  );
};

export default Operations;