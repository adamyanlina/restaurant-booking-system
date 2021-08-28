module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('table', [
            {
                number: 1,
                capacity: 4
            },
            {
                number: 2,
                capacity: 3
            },
            {
                number: 3,
                capacity: 3
            },
            {
                number: 4,
                capacity: 6
            },
            {
                number: 5,
                capacity: 6
            },
            {
                number: 6,
                capacity: 6
            },
            {
                number: 7,
                capacity: 6
            },
            {
                number: 8,
                capacity: 10
            },
            {
                number: 9,
                capacity: 4
            },
            {
                number: 10,
                capacity: 4
            },
            {
                number: 11,
                capacity: 5
            },
            {
                number: 12,
                capacity: 5
            },
            {
                number: 13,
                capacity: 5
            },
        ],
        {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('table', null, {});
    }
};
