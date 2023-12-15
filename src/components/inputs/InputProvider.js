import React, { useState } from "react"; 

const CalContext =  React.createContext();

const inp = {
  leftSide: "0",
  rightSide:"0",
  operator: " ",
  result: " ",
  op: Operate
};


const InputProvider = ({children}) =>{
  const [ins,setIns] = useState(inp);

    return (
        <div>
            <CalContext.Provider value={[ins,setIns]}>
            {children}
        </CalContext.Provider>
        </div>
        
        );
}

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


export const useCalContext = () => React.useContext(CalContext);

export default InputProvider;