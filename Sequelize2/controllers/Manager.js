const db = require('../models')
const Op = db.Sequelize.Op

const getAllManagers = async (req, res) => {
    try {
        const allManagers = await db.Manager.findAll();
        // const allManagers = await db.Manager.findAll({ where: { experience: { [Op.gt]: 3 } } });
        res.status(200).send(allManagers)
    } catch (err) {
        res.status(404).send(err)
    }
};

const getManagerById = async (req, res) => {
    try {
        const managerById = await db.Manager.findOne({ where: { id: req.params.id } })
        res.status(200).send(managerById)
    } catch (err) {
        res.status(404).send(err)
    }
}

const addManager = async (req, res) => { // post มันมี body ด้วย อย่าลืม
    try {
        const newManager = await db.Manager.create({
            name: req.body.name,
            experience: req.body.experience
        })
        res.status(201).send(newManager)
    } catch (err) {
        res.status(404).send(err)
    }
}

async function delManager(req, res) {
    try {
        await db.Manager.destroy({ where: { id: req.params.id } })
        res.status(204).send('Delete Success')  //delete ใช้ statusCode 204
    } catch (err) {
        res.status(404).send(err)
    }
}

function updateManager(req, res) { // put มี body 
    return new Promise((resolve, reject) => {
        if (true) {
            db.Manager.update({
                name: req.body.name,
                experience: req.body.experience
            }, { where: { id: req.params.id } })
            resolve()
        } else {
            reject()
        }
    }).then(() => res.status(200).send('Update Success'))
        .catch((err) => res.status(404).send(err))
}
//consumer code
// function update(req,res) {
//     updateManager(req,res)
//         .then(() => res.status(200).send('Update Success'))
//         .catch((err) => res.status(404).send(err))
// }

module.exports = {
    getAllManagers,
    getManagerById,
    addManager,
    delManager,
    updateManager
};