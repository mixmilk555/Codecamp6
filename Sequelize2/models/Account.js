module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Account', {
        value: {
            type: DataTypes.FLOAT
        }
    }, {
        tableName: "account",
        timestamps: false
    })
    model.associate = (models) => {
        model.belongsTo(models.Branch)
        model.belongsToMany(models.Customer, { through: models.Owns })

    }
    return model;
}