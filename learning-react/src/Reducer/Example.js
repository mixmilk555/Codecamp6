import React, { useReducer } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

// const Example =() =>{return()};   function arrow

const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return state * 0;
        default:
            return state;
    }
}

const Example = function () {
    const [state, dispatch] = useReducer(reducer, 0)
    const handleOnClick = () => { dispatch({ type: "increment" }) }
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', width: "100%", height: "100vh", }}>
            <div style={{width:"200px",height:"200px" , border:"2px solid blue",borderRadius:'17px'}}>
                <div style={{ color: 'cyan', fontSize: '4em' }}>{state}</div>
                <div style={{ border: "1px solid red",borderRadius:'17px', width: "100px", height: "50px",marginLeft:"50px" }}>
                    <button onClick={handleOnClick} style={{ marginTop: "15px" }}> + </button>
                    <button onClick={() => { dispatch({ type: "decrement" }) }} > - </button>
                    <button onClick={() => { dispatch({ type: "reset" }) }}> reset </button>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>index</Link>
                </div>
            </div>
        </div>
    )
}

export default Example