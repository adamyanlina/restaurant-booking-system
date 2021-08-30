const {
    Model, Sequelize
} = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        picture: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return User;
};