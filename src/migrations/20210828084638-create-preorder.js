module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('preorder', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            menu_item_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'menu_item',
                    key: 'id'
                }
            },
            quantity: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            comment: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('preorder');
    }
};