import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState({ count: 0 })
    const handleClick = () => {
        setCount({ count: count.count + 1 })
    }
    useEffect(() => console.log('update'), [count])
    return (
        <div>
            <p>You Clicked {count.count} </p>
            <button onClick={handleClick}> Click </button>
        </div>)
}
export default Count;

//   useEffect(()=>{console.log("update")} )   --> ทำงานทุกครั้งที่มีการ update state ทุกอัน
//   useEffect(()=>{console.log("update")} ,[])  --> ทำงานครั้งแรกตอน render รอบแรก
//   useEffect(()=>{console.log("update state")},[state,state1] )  -->ทำงานทุกครั้งที่มีการ update state,state1
//   useEffect(()=>{console.log("update state")},[state] )  -->ทำงานทุกครั้งที่มีการ update state
//   useEffect(()=>{console.log("update state1")},[state1] )-->ทำงานทุกครั้งที่มีการ update state1
