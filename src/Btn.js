// function Btn() {
//     const clickHandler = () => console.log("Clicked");
//   return <button 
//   onClick={clickHandler}>
//     Click Me</button>;
// }

// export default Btn;


function Btn() {
    const clickHandler = () => console.log("Clicked");
  return <button id="js-btn"
  onMouseOver={clickHandler}>
    Click Me</button>;
}

export default Btn;
