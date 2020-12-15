import React, { useState } from 'react'
import { Button, Row, Col, Input } from 'antd';
import axios from 'axios';

export default function Todo(props) {
    const [editInput, setEditInput] = useState("");
    const editTodoList = async (id) => {
        await axios.put(`http://localhost:8000/todo-list/${id}`, { task: editInput })
        props.fetchTodoList();
        setEditInput("");
    }
    return (
        <div style={{ width: "100%" }}>
            <Row style={{ width: '100%' }} >
                <Col span={20}>
                    <Input placeholder="ข้อความแก้ไข" name="editInput" value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                </Col>
                <Col span={4}>
                    <Button type={"primary"} onClick={() => { return editTodoList(props.todo.id) }}> Done </Button>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={20}>
                    <Row justify={"start"} >
                        {props.todo.task}
                    </Row>
                </Col>
                <Col span={4}>
                    <Button type="danger" onClick={() => { return props.delete(props.todo.id) }} > Delete </Button>
                </Col>
                {/* <Button type="danger" onClick={()=>deleteTodoItem(state.id)}> Delete </Button> */}
            </Row>
        </div>
    )
}
