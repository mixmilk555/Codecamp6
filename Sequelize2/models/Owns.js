module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Owns', {
        day: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'owns',
        timestamps: false
    })
    return model
}