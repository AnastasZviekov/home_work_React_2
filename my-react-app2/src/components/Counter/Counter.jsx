import {useState} from "react";
import './style.css'

export const Counter = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1);
    }

    const decrement = () => {
        setState(state > 0 ? state - 1 : 0);
    }

    const reset = () => {
        setState(0);
    }

    return (
        <div>
            <p>{state}</p>
            <button className="color" onClick={increment}>+</button>
            <button className="color" onClick={decrement}>-</button>
            <button className="color" onClick={reset}>DELETE</button>
        </div>
    )
}