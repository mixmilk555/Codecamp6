module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Manager', {
        name: {
            type: DataTypes.STRING(255)
        },
        experience: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'manager',
        timestamps: false
    });
    model.associate = models => {
        model.hasOne(models.Branch);
    };
    return model
}