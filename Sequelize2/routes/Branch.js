const express = require('express');
const router = express.Router()
const branchControllers = require('../controllers/Branch')

router.get('/', branchControllers.branchAll)
router.post('/', branchControllers.branchCreateAndManager)




module.exports = router