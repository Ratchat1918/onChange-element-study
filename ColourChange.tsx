import {useState} from "react";

function ColourChange(){
    const [colour,setColour]=useState("#FFFF");
    function changeColour(event){
        setColour(event.target.value)
    }
    return(
        <>
        <div className="clourChoice">
            <p>Selected colour:{colour}</p>
            <input onChange={changeColour} value={colour} type="color"></input>
        </div>
        </>
    );
};
export default ColourChange;