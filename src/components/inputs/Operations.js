import React from "react"; 
import { useCalContext } from "./InputProvider";

function Operate(leftSide, rightSide, operator) {
    // Convert the string operands to numbers
    const leftNumber = parseFloat(leftSide);
    const rightNumber = parseFloat(rightSide);
  
    // Check if the conversion was successful
    if (isNaN(leftNumber) || isNaN(rightNumber)) {
        return "Invalid operands. Please provide valid numeric values.";
    }
  
    // Perform the operation based on the specified operator
    switch (operator) {
        case '+':
            return leftNumber + rightNumber;
        case '-':
            return leftNumber - rightNumber;
        case '*':
            return leftNumber * rightNumber;
        case '/':
            // Check for division by zero
            if (rightNumber === 0) {
                return "Error: Division by zero.";
            }
            return leftNumber / rightNumber;
        default:
            return "Invalid operator. Please use '+', '-', '*', or '/'.";
    }
  }
  
const Operations = ()=>{
    //const [op,setOp] = " ";
    const [ins,setIns] = useCalContext();

    function clickHandler(){
        alert(ins)
        console.log(ins);
    }
    return (
        <div>
            <br/>
            <button  onClick={clickHandler}>Add</button>
            <button  onClick={clickHandler}>Minus</button>
            <button  onClick={clickHandler}>Multiply</button>
            <button  onClick={clickHandler}>Subtract</button>
        <br/>
        <button  onClick={clickHandler}>Reset Input</button>
        <button  onClick={clickHandler}>Reset Result</button>
        </div>
    );
}



export default Operations;