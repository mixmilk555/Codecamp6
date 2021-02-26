const express = require('express');
const router = express.Router()
const managerAll = require('../controllers/Manager')

// router.get('/', (req,res)=>{
//     managerAll.getAllManagers(req,res)
// })
router.get('/', managerAll.getAllManagers)
router.get('/:id', managerAll.getManagerById)
router.post('/', managerAll.addManager)
router.delete('/:id', managerAll.delManager)
router.put('/:id', managerAll.updateManager)

module.exports = router