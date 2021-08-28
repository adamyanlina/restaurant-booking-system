module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('table', [
            {
                number: 1,
                capacity: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 2,
                capacity: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 3,
                capacity: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 4,
                capacity: 6,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 5,
                capacity: 6,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 6,
                capacity: 6,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 7,
                capacity: 6,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 8,
                capacity: 10,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 9,
                capacity: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 10,
                capacity: 4,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 11,
                capacity: 5,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 12,
                capacity: 5,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                number: 13,
                capacity: 5,
                created_at: new Date(),
                updated_at: new Date()
            },
        ],
        {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('table', null, {});
    }
};
