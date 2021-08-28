const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Menu_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Menu_item.init({
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Menu_item',
    });
    return Menu_item;
};