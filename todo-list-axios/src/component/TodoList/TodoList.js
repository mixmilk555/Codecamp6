import { List, Input, Button, Row, Col, Divider, Typography } from 'antd';
import React, { useState, useEffect } from 'react'
// import _ from 'lodash';
import axios from 'axios';
import Todo from './Todo';

export default function TodoList() {
    const [state, setState] = useState([]);
    const [input, setInput] = useState();

    useEffect(() => {
        fetchTodoList();
    }, [])

    const handleOnChange = function (e) {
        setInput(e.target.value)
    }
    const { Text } = Typography;

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("http://localhost:8000/todo-list");
        setState(httpResponse.data);
    };
    const deleteSS = async (id) => {
        await axios.delete(`http://localhost:8000/todo-list/${id}`)
        console.log("susceress")
        fetchTodoList();
    };

    const addTodoItem = async () => {
        await axios.post("http://localhost:8000/todo-list", { task: input });
        fetchTodoList();
        setInput("");
    };


    //     แบบทำฝั่ง frontend อย่างเดียว
    // // const addTodoItem = () => {
    // //     const newTodoList = [...state];
    // //     newTodoList.push({
    // //         id: _.uniqueId(),
    // //         task: input
    // //     });
    // //     setState(newTodoList);
    // //     setInput("");
    // // }
    // // const deleteTodoItem = () => {
    // //     const TodoList = [...state];
    // //     TodoList.splice(0, 1)
    // //     setState(TodoList);
    // // }
    // แบบ 1
    // const deleteTodoItem = (id) => {
    //     const newTodoList = TodoList.filter(todo => todo.id !== id);
    //     setState(newTodoList);
    // }
    // แบบ 2
    // const deleteTodoItem =(id) =>{
    //     const newTodoList = [...state];
    //     const targetIndex = newTodoList.findIndex(todo => todo.id === id);
    //     newTodoList.splice(targetIndex,1);
    //     setState(newTodoList);
    // }
    return (
        <div>
            {/* {state.map(item => <li id={item.id}>  </li>)} */}

            {/* {state.map(function(item){
                return <li id={item.id}> {item.task} </li>
            })}; */}
            <Row justify="center">
                <Col>
                    <Row justify="center" style={{ fontSize: "1.5em" }} >
                        <Text type="warning"> กรุณาเพิ่มlist item ที่ต้องการ</Text>
                    </Row>
                    <Row>
                        <Col span={20}><Input name="input" value={input} onChange={handleOnChange} /> </Col>
                        <Col span={4}><Button style={{ width: "92%" }} onClick={addTodoItem}>Add</Button></Col>
                    </Row>
                    <Divider />
                    <Row>
                        {/* ทำแบบสวยงามจาก Antd */}
                        <List style={{ width: "400px" }}
                            header={<div>Todo List Page</div>}
                            bordered
                            dataSource={state}
                            renderItem={todo => (
                                <List.Item>
                                    <Todo delete={deleteSS} todo={todo} fetchTodoList={fetchTodoList }/>
                                </List.Item>
                            )}
                        />

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
