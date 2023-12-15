import { useCalContext } from "./InputProvider";


const Inputs = () =>{
    const [ins,setIns] = useCalContext();
    console.log(ins);
   // const leftSide = ins.leftSide;
    return (
        <div>
        <label> Left side
        <input 
          value={ins.leftSide} 
         onChange={e => { 
           setIns({ 
             ...ins, 
             leftSide: e.target.value 
           }); 
         }} 
       /> 
     </label>
      <label> Right side
        <input 
          value={ins.rightSide} 
         onChange={e => { 
           setIns({ 
             ...ins, 
             rightSide: e.target.value 
           }); 
         }} 
       /> 
       </label>
       <label> Result
        <input value={ins.result} /> 
       </label>
       </div>
    )
}


export default Inputs;