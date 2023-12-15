// import AboutMe from "./components/page/AboutMe";
// import Homepage from "./components/page/Homepage";
// import {Link, Route, Routes} from "react-router-dom"

// function App(){
//     return(
//         <div className="App">
//             <nav className="nav">
//                 <Link to="/" className="nav-item">Homepage</Link>
//                 <Link to="/" className="nav-item">About Me</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={Homepage} />
//                 <Route path="/about-me" element={AboutMe} />
//             </Routes>
//         </div>
//     )
// }

// export default App;

import InputProvider from "./components/inputs/InputProvider";
import Inputs from "./components/inputs/Inputs";
import Operations from "./components/inputs/Operations";



 
// function App() { 
//   const bird1 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
//   ); 
 
//   const bird2 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
//   ); 
 
//   function toggle1() { 
//     if (bird1.paused) { 
//       bird1.play(); 
//     } else { 
//       bird1.pause(); 
//     } 
//   }; 
 
//   function toggle2() { 
//     if (bird2.paused) { 
//       bird2.play(); 
//     } else { 
//       bird2.pause(); 
//     } 
//   }; 
 
//   return ( 
//     <div> 
//       <button onClick={toggle1}>Caspian Tern 1</button> 
//       <button onClick={toggle2}>Caspian Tern 2</button> 
//     </div> 
//   ); 
// } 


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