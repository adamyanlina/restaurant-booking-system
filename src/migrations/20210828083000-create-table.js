module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('table', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            capacity: {
                type: Sequelize.INTEGER,
                defaultValue: 6,
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM,
                values: [
                    'free',
                    'booked'
                ],
                defaultValue: 'free',
                allowNull: false,
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
        await queryInterface.dropTable('table');
    }
};