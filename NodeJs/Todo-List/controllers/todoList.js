const { uniqueId } = require("lodash");

let todoList = [];

const getTodoList = (req, res) => {
    res.status(200)
    res.send(todoList)
}

const createTodoList = (req, res) => {
    const newTodo = {
        id: uniqueId(), //return เลขเป็น string
        task: req.body.task
    }
    todoList.push(newTodo);
    res.status(201).send(newTodo) // 201 =create
}


const updateTodoList = (req, res) => {
    const updateTodo = String(req.params.id); //แปลงเป็น String ไว้ก่อน
    const targetInd = todoList.findIndex(x => x.id === updateTodo)
    todoList[targetInd] = {
        id: updateTodo,
        task: req.body.task
    }
    res.status(200).send('Success')
}

const deleteTodoList = (req, res) => {
    const deleteID = String(req.params.id);
    todoList = todoList.filter(x => x.id !== deleteID)
    res.status(204).send('Success') //204 ลบเรียบร้อยแล้ว
}

module.exports = {
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}