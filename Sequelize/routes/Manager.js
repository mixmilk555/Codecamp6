const express = require('express');
const router = express.Router();
const managerControllers = require('../controllers/Manager')

// router.get('/', managerControllers.getAllManagers)
// router.get('/', managerControllers.getManagerById)
// router.post('/', managerControllers.createManager)
// router.put('/', managerControllers.updateManager)
// router.delete('/', managerControllers.deleteManager)

router.get('/', (req, res) => {
    managerControllers.getAllManagers(req, res)
})

router.get('/:id', (req, res) => {
    managerControllers.getManagerById(req, res)
})

router.post('/', (req, res) => {
    managerControllers.createManager(req, res)
})

router.put('/:id', (req, res) => {
    managerControllers.updateManager(req, res)
})

router.delete('/:id',(req,res)=>{
    managerControllers.deleteManager(req,res)
})
module.exports = router;