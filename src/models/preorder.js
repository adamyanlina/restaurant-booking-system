const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Preorder.init({
        user_id: DataTypes.INTEGER,
        menu_item_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        comment: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Preorder',
        tableName: 'preorder',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Preorder;
};