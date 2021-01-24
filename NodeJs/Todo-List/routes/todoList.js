const express = require('express');
const todoListRoute = express.Router();  // todoListRoute เป็น middleware function
const todoList = require('../controllers/todoList')


todoListRoute.get('/', (req, res) => {
    todoList.getTodoList(req, res)
})

todoListRoute.post('/', (req, res) => {
    todoList.createTodoList(req, res)
});

todoListRoute.put('/:id', (req, res) => {
    todoList.updateTodoList(req, res)
});
todoListRoute.delete('/:id', (req, res) => {
    todoList.deleteTodoList(req, res)
})

// เป็น Code แบบย่อ ว่า เมื่อมีการ request path '/' เข้ามา ให้ไปไหน ซึ่งมันจะส่ง parameter (req,res) เองอันตโนมัติ
//ตาม code ข้างบน

// app.use('/todo-list',todoListRoute)
// todoListRoute.get('/',todoList.getTodoList)
// todoListRoute.post('/',todoList.createTodoList)
// todoListRoute.put('/',todoList.updateTodoList)
// todoListRoute.delete('/',todoList.deleteTodoList)

module.exports = todoListRoute;