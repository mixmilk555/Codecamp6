const express = require('express');
const router = express.Router();
const branchControllers = require('../controllers/Branch')

router.get('/',branchControllers.getAllBranch)
router.post('/',branchControllers.createBranchAndManager)
router.put('/:id',branchControllers.updateBranch)
router.delete('/:id',branchControllers.deleteBranch)


module.exports = router;