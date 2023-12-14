// import './App.css';
// import React from "react";
// import MealsProvider from './components/provider/MealsProvider';
// import MealsList from './components/MealsList';
// import Counter from './components/Counter';
// import { useReducer } from 'react';
// import Fruits from './components/fruits/Fruits';
// import FruitsCounter from './components/fruits/FruitsCounter';
//import Promo from './components/promo/Promo';
// import Header from './components/navcomponents/Header';
// import Main from './components/navcomponents/Main';
// import Sidebar from './components/navcomponents/Sidebar';
// import Heading from './components/navcomponents/Heading';
// import Bag from './components/fruits/Bag';
// import Apples from './components/fruits/Apple.';
// import Pears from './components/fruits/Pears';
// import Btn from './Btn';
//import ModeToggler from './modeToggler';




// function App() { 
//   const [fruits] = React.useState([  {fruitName: 'apple', id: 1},   {fruitName: 'apple', id: 2},  {fruitName: 'plum', id: 3},]);
//   return ( 
//     // <div className="App"> 
//     //   This is the starting code for "Your first component" ungraded lab 
//     //   <Header name="Anna" color="Purple"/> 
//     //   <Main greet="howdy"/>
//     //   <Sidebar greet="hello"/>
//     //   <Heading firstName="Any name other than Bob" />
//     //   <Heading firstName="Jack" />  <Promo/>

      
//     // </div> 
//     // <Bag>
//     //   <Apples color="yellow" number="5" />
//     //   <Pears friend="Peter" />   <ModeToggler></ModeToggler> 
//     // </Bag>

//     // <div>
//     <div className="App">
//           <h1>Where should the state go?</h1>
//           <Fruits fruits={fruits} />
//           <FruitsCounter fruits={fruits} />
//     </div>
//     // </div>

//   ); 
// } 
 
// export default App;

// function Main(props) { 
//   return <Header msg={props.msg} />; 
// };

// function Header(props) { 
//   return ( 
//     <div style={{ border: "10px solid whitesmoke" }}> 
//       <h1>Header here</h1> 
//       <Wrapper msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Wrapper(props) { 
//   return ( 
//     <div style={{ border: "10px solid lightgray" }}> 
//       <h2>Wrapper here</h2> 
//       <Button msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Button(props) { 
//   return ( 
//     <div style={{ border: "20px solid orange" }}> 
//       <h3>This is the Button component</h3> 
//       <button onClick={() => alert(props.msg)}>Click me!</button> 
//     </div> 
//   ); 
// };

// function App() { 
//   return ( 
//     <Main  
//       msg="I passed through the Header and the Wrapper and I reached the Button component"  
//     /> 
//   ); 
// }; 

// function App() { 
//   return ( 
//     <div>
//         <MealsProvider>
//             <MealsList/>
//             <Counter/>
//         </MealsProvider>
//     </div>
//   ); 
// }; 

// const reducer = (state,action)=>{
//     if(action.type ==='ride') return {money: state.money + 10};
//     if(action.type ==='fuel') return {money: state.money -50};
//     return new Error();
// }
// function App(){
//   const initialState = {money:100};
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return(
//     <div className='App'>
//         <h1>Wallet: {state.money}</h1>
//         <div>
//             <button onClick={() => dispatch({type:'ride'})}>New Customer</button>
//             <button onClick={() => dispatch({type:'fuel'})}>Refill tank</button>
//         </div>
//     </div>
//   )
// }

// export default App;

// export default App;
