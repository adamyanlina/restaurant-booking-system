module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('menu_item', [
            {
                title: 'Toriniku Soup',
                description: 'Vermicelli, chicken breast, rusks',
                price: 1200,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Abby Udon Soup',
                description: 'Shrimp',
                price: 1800,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Sukiyaki Ramen',
                description: 'Marble meat, vakame, Parey onions, wheat noodles, eggs',
                price: 5000,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Satori Soup',
                description: 'Beef, Miso broth, nori, vakame, mushrooms, omelet',
                price: 2000,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Seafood Soup',
                description: 'Handicraft broth, nori, rice noodles, squid, sea buckthorn, salmon',
                price: 3200,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Mashuru Soup',
                description: 'cream, mushrooms, cheese',
                price: 1800,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Thai Soup',
                description: 'Nori, mussels, rice noodles, bonito, squid, shrimp, salmon, cucumber',
                price: 2900,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Chuka Sarada',
                description: 'sesame sauce, chuka',
                price: 2900,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Maguro Sarada',
                description: 'Avocado, tobiko, pepper, lettuce, smoked tuna, sesame sauce',
                price: 4200,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'California Sarada',
                description: 'Shrimp mixture, cucumber, tobiko, avocado',
                price: 3200,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Unagi Spice Sarada',
                description: 'Pepper, sesame seeds, spicy sauce, cucumber, eel, avocado',
                price: 5600,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Chocolate Roll',
                description: 'Chocolate cream, nuts, cream cheese',
                price: 3200,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                title: 'Brownie',
                description: 'Brownie, loved by everyone, made with a diet recipe',
                price: 1200,
                created_at: new Date(),
                updated_at: new Date()
            },
        ],
        {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('menu_item', null, {});
    }
};
