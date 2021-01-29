const { Sequelize } = require('../models/index');
const db = require('../models/index');
const Op = Sequelize.Op;

const getAllManagers = async (req, res) => {
    const allManagers = await db.Manager.findAll();
    // const allManagers = await db.Manager.findAll({ where: { experience: { [Op.gte]: 2 } } });
    res.status(200).send(allManagers)
}

const getManagerById = async (req, res) => {
    const targetManager = await db.Manager.findOne({ where: { id: req.params.id } })
    res.status(200).send(targetManager);
}

const createManager = async (req, res) => {
    const { name, experience } = req.body;
    const newManager = await db.Manager.create({
        name: name,
        experience: experience
    })
    res.status(201).send(newManager)
}

const updateManager = async (req, res) => {
    const target = req.params.id
    const { name, experience } = req.body
    await db.Manager.update({
        name: name,
        experience: experience
    }, { where: { id: target } })
    res.status(200).send(`Manager ID : ${target} has been updated`);
}

const deleteManager = async (req, res) => {
    const target = req.params.id
    await db.Manager.destroy({ where: { id: target } })
    res.status(200).send(`Manager ID : ${target} has been deleted`)
}

module.exports = {
    getAllManagers,
    getManagerById,
    createManager,
    updateManager,
    deleteManager
}