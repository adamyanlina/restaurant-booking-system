const path = require('path');

const { verifyToken } = require('../utils/verifyToken');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const clientID = process.env.CLIENT_ID;

exports.signinPage = (req, res, next) => {
    try {
        const contentType = 'application/json';
        const apiVersion = process.env.API_VERSION;

        return res.render('signin', { clientID, apiVersion, contentType });
    } catch (error) {
        next(error);
    }
};

exports.signin = async (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) throw new Error('Token was not provided');

        const payload = await verifyToken(token);
        const { name, email, picture, sub } = payload;

        // TODO: Insert user in POSTGRES Database (Sequelize)
        res.cookie('session-token', token);

        return res.status(202).send('Google User');
    } catch (error) {
        next(error);
    }
};

exports.signout = (req, res, next) => {
    try {
        res.clearCookie('session-token');
        return res.redirect('signin', { message: 'Sign out!' });
    } catch (error) {
        next(error);
    }
};