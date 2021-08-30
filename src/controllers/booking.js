const db = require('../models');

const { Op } = require('sequelize');

exports.booking = async (req, res, next) => {
    try {
        const { user_id, table_id, preorder_items, start_date, end_date } = req.body;

        const booked = await db.Booking.findOne({ 
            where: {
                [Op.and]: [
                    table_id, 
                    {
                        [Op.or]: [
                            { start_date: { [Op.between]: [start_date, end_date] } },
                            { end_date: { [Op.between]: [start_date, end_date] } }
                        ]
                    }
                ]
            } 
        });

        console.log(booked);

        if (booked) return res.status(409).json({ error: 'Conflict', message: 'Table is not available.' })
        
        preorder_items.forEach(item => {
            item.user_id = user_id
        });
        const preorder = await db.Preorder.bulkCreate(preorder_items);

        const book = {
            user_id, 
            table_id,
            start_date, 
            end_date
        };
        const booking = await db.Booking.create(book);
        console.log(booking)
        
        return res.status(200).json({ booking, preorder });
    } catch (error) {
        console.log(error);
        next(error);
    }
};