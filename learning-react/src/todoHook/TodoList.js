import React, { useState, useEffect } from 'react';
import arrow from './arrow.png';

export const TodoList = () => {
    const [text, textUpdate] = useState("");
    const [list, listUpdate] = useState([]);
    const [done, doneUpdate] = useState([]);
    //  function handleChange(e){textUpdate(e.target.value)}
    const handleChange = (e) => textUpdate(e.target.value);
    // const handleClick=()=>{return listUpdate([...list ,text]), textUpdate("")};
    const handleClick = () => {
        listUpdate([...list, text])  //การ merge ของ array
        textUpdate("")
    };

    const handleMove = (index) => {
        let data = [...list];
        let move = data.splice(index, 1);
        doneUpdate([...done, move])
        listUpdate(data)
    };
    const handleDelete = (index) => {
        let data = [...done]
        data.splice(index, 1)
        doneUpdate(data)
    };
    const handleBack = (index) => {
        let data = [...done]
        let move = data.splice(index, 1)
        listUpdate([...list, ...move])
        doneUpdate(data);
        //return   listUpdate([...list,...move])  ,  doneUpdate(data) ทำได้สองแบบ
    };

    //useEffect()
    const [Api, apiUpdate] = useState([]);

     useEffect( async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        apiUpdate(data)
     },[])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json()) 
    //         .then(json => { apiUpdate(json) })
    // }, [])
    useEffect(() => { console.log("list or done change") }, [list, done]);
    useEffect(() => { console.log("track list") }, [list]);
    useEffect(() => { console.log("track done") }, [done]);
    useEffect(() => { console.log("update") });

    return (
        <div style={{ display: "grid", gridTemplateColumns: "300px 300px", justifyContent: "center", gridGap: "50px 50px" }}>
            <div>
                <h3>TodoList</h3>
                <ul style={{ listStyle: "none" }}>
                    {list.map((aa, index) => <li>{aa}<span onClick={() => handleMove(index)}>
                        <img style={{ width: "17px", height: "17px" }} src={arrow} alt="arrow" /></span></li>)}
                </ul>
                <div>
                    <input type="text" value={text} onChange={handleChange} />
                    <button onClick={handleClick}> add text </button>
                </div>
            </div>
            <div>
                <h3> Done </h3>
                <ul>
                    {done.map((text, index) => <li>{text}<span>
                        <button onClick={() =>handleDelete(index)}>Delete</button>
                        <button onClick={() =>handleBack(index)}>back</button></span></li>)}
                </ul>
            </div>
            <div className="table">
                <table style={{border: "1px solid black",width:"500px"}} >
                    <tr style={{border: "1px solid black"}}>
                        <th style={{border: "1px solid black"}}>userId</th>
                        <th style={{border: "1px solid black"}}>id</th>
                        <th style={{border: "1px solid black"}}>title</th>
                    </tr>
                    {Api.map((item) => {
                        return (<tr style={{border: "1px solid black"}}>
                            <td style={{border: "1px solid black"}}>{item.userId}</td>
                            <td style={{border: "1px solid black"}}>{item.id}</td>
                            <td style={{border: "1px solid black"}}>{item.title}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </div>
    )
}
