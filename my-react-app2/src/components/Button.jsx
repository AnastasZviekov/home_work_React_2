import {Counter} from "./Counter/Counter.jsx";
import React, {useState} from "react";
export const Button = () => {

    const [isClicked,setClick]=useState(false);
    const addToCart=()=>{
       setClick(true)
    }
    return (<div><button onClick={addToCart}>Add to Cart </button>
        {isClicked&&<Counter/>}
    </div>)

}