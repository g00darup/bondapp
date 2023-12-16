import React, { useState } from "react"; 

const CalContext =  React.createContext();

const inp = {
  leftSide: "0",
  rightSide:"0",
  operator: " ",
  result: 0
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



export const useCalContext = () => React.useContext(CalContext);

export default InputProvider;