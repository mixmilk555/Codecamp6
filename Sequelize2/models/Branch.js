module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Branch', {
        name: {
            type: DataTypes.STRING(255)
        },
        size: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "branch",
        timestamps: false
    });
    model.associate = (models) => {
        model.belongsTo(models.Manager)
        model.hasMany(models.Account)
    }
    return model
}