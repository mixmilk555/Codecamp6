const db = require('../models/index');

const getAllBranch = async (req, res) => {
    const allBranch = await db.Branch.findAll({ include: [db.Manager] });
    res.status(200).send(allBranch);
}

const createBranchAndManager = async (req, res) => {
    const { managerName, managerExperience } = req.body
    const { branchName, branchSize } = req.body;
    const newManager = await db.Manager.create({
        name:managerName,
        experience :managerExperience
    });
    const newBranch = await db.Branch.create({
        name: branchName,
        size: branchSize,
        manager_id  : newManager.id
    })
    res.status(201).send(newBranch);
}

const updateBranch = async (req, res) => {
    const target = req.params.id
    const { name, size } = req.body
    await db.Branch.update({
        name: name,
        size: size
    }, { where: { id: target } })
    res.status(200).send(`Branch ID : ${target} has been updated`)
}

const deleteBranch = async (req, res) => {
    const target = req.params.id
    await db.Branch.destroy({
        where: { id: target }
    })
    res.status(200).send(`Branch ID : ${target} has been deleted`)
}

module.exports = {
    getAllBranch,
    createBranchAndManager,
    updateBranch,
    deleteBranch
}