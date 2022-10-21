import React, {useState} from "react";
import "./Button.css"

const Button = (props)=> {
    const [currentVal, setCurrentVal] = useState(0)
    const handleClick = ()=> {
        setCurrentVal(currentVal + props.countNumber);
        // alert("This function is working properly!")
    }
    return (
        <>
            <div>
                <p id="paraVal">{currentVal}</p>
                <button onClick={handleClick}>Count</button>
            </div>
        </>
    )
};

export default Button;