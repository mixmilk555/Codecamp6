const db = require('../models')

const branchAll = async (req, res) => {
    try {
        const a = await db.Branch.findAll(); 
        // const a = await db.Branch.findAll({ include: [db.Manager] }); //เอา manager มาแสดงด้วย
        res.status(200).send(a)
    } catch (err) {
        res.status(404).send(err)
    }
}

async function branchCreateAndManager(req, res) {
    try {
        const newManager = await db.Manager.create({
            name: req.body.managerName,
            experience: req.body.experience
        })
        const newBranch = await db.Branch.create({
            name: req.body.branchName,
            size: req.body.size,
            ManagerId: newManager.id
        })
        res.status(201).send(newBranch)
    } catch (err) {
        res.status(404).send(err)
    }
}

module.exports = {
    branchAll,
    branchCreateAndManager
}