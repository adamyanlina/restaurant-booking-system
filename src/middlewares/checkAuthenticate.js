const path = require('path');

const db = require('../models');
const { verifyToken } = require('../utils/verifyToken');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const apiVersion = process.env.API_VERSION;

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies['session-token'];
        if (!token) throw new Error('Token was not provided');

        const payload = await verifyToken(token);
        const { given_name, family_name, email, picture, sub } = payload;

        const user = {
            first_name: given_name,
            last_name: family_name,
            email,
            picture
        };

        const created = await db.User.findOrCreate({ where: user});

        req.user = created[0];
        return next();
    } catch (error) {
        // res.redirect(`${apiVersion}/auth/signin`);
        next(error);
    }
};