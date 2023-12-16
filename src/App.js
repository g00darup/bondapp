import InputProvider from "./components/inputs/InputProvider";
import Operations from "./components/inputs/Operations";
import Inputs from "./components/inputs/Inputs";

function App(){
    
    return (
        <div>
            <InputProvider>
                <Inputs/>
                <Operations/>    
            </InputProvider>
        </div>
    );

}






 
export default App;