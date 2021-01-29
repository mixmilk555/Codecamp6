import React, { useState,useEffect } from 'react'

function Count() {
    const [state, setState] = useState({ Count: 0 });  //ค่าใน useState เก็บอะไรก็ได้ ไม่แค่ Object
    const [state1, setState1] = useState(0);

    const handleCount = () => {
        setState({ Count: state.Count + 1 })
    }
    const handleCount1 = () => {
        setState1(state1 + 1)
    }

    // useEffect(()=>{console.log("update")} )
    useEffect(()=>{console.log("update")} ,[])
    // useEffect(()=>{console.log("update state")},[state,state1] )
    // useEffect(()=>{console.log("update state")},[state] )
    // useEffect(()=>{console.log("update state1")},[state1] )
    
   

    return (
        <div>
            <p>You Clicked Object{state.Count} times</p>
            <p>You Clicked Number{state1} times</p>
            <button onClick={handleCount}>setState!</button>
            <button onClick={handleCount1}>setState1!</button>
            {/* <button onClick={()=>setState(state+1)}>setState!</button> */}
        </div>
    )
}
export default Count;

// this.