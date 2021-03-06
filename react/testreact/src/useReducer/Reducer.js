import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

const reducer = (state, action) => {
    switch (action.type) { //action เป็น object
        case "increment":
            return ({ ...state, counter: state.counter + 1 })
        case "decrement":
            return ({ ...state, counter: state.counter - 1 })
        case "reset":
            return ({ ...state, counter: state.counter * 0 })
        case "addText":
            return ({ ...state, text: [...state.text, action.aa] }) // action = { type: "addText", aa: text }
        default:
            return state;
    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, { counter: 0, text: [] })
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
                        dispatch({ type: "addText", aa: text }) // action = { type: "addText", aa: text }
                    setText('')
                }}>
                    {/* e={target : {name : {name} ,value: {value}}} e.target.value e.target.name */}
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </form>
                <ul>
                    {state.text.map(item => { return (<li>{item}</li>) })}

                </ul>
            </div>
        </div>
    )
}
