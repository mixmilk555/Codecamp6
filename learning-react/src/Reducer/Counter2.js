import React, { useReducer, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom';

// const Example =() =>{return()};   function arrow

const reducer = (state, action) => {
    console.log(state.counter);
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + 1 };  // ใช้ spread clone state แล้ว แทนค่าเดิมด้วยค่าใหม่หลัง commma
        case "decrement":
            return { ...state, counter: state.counter - 1 };
        case "reset":
            return { ...state, counter: state.counter * 0 };
        case "addText":
            return { ...state, text: [...state.text, action.aa] }
        default:
            return state;
    }
}

const Counter2 = function () {
    const [state, dispatch] = useReducer(reducer, { counter: 0, text: [] });
    const [text, setText] = useState("");
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', width: "100%", height: "100vh", }}>
            <div style={{ width: "200px", height: "200px", border: "2px solid blue", borderRadius: '17px' }}>
                <div style={{ color: 'cyan', fontSize: '4em' }}>
                    {state.counter}
                </div>
                <div style={{ border: "1px solid red", borderRadius: '17px', width: "100px", height: "50px", marginLeft: "50px" }}>
                    <button onClick={() => { dispatch({ type: "increment" }) }} style={{ marginTop: "15px" }}> + </button>
                    <button onClick={() => { dispatch({ type: "decrement" }) }} > - </button>
                    <button onClick={() => { dispatch({ type: "reset" }) }}> reset </button>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>index</Link>
                </div>
            </div>
            <div>
                <form onSubmit={(e) => {
                    return e.preventDefault(),
                        dispatch({ type: "addText", aa: text })
                        setText('')
                }}>                                              
                                                    {/* e={target : {name : {name} ,
                                                                    value: {value}}} e.target.value e.target.name */}
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </form>
                <ul>
                    {state.text.map(item =>{ return( <li>{item}</li> )})}
   
                </ul>
            </div>
        </div>
    )
}

export default Counter2