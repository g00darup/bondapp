function ModeToggler(){
    const darkMode = <h1>Dsrk Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    let darkModeOn = false;
    function clickHandler (){
        darkModeOn =!darkModeOn;

        if(darkModeOn){
            console.log("Dark mode is on");
        }else{
            console.log("Light mode is on");
        }
    }   
     return (
        <div>
            {darkModeOn ? darkMode : lightMode}
         <button id="js-btn" onMouseOver={clickHandler}>   Click Me</button>
        </div>)
}

export default ModeToggler;