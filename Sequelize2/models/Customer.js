module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING(255)
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'customer',
        timestamps: false
    })
    model.associate = (models) => {
        model.belongsToMany(models.Account, { through: models.Owns })
    }
    return model;
}