const path = require('path');

// const User = require('../models').user;
const db = require('../models');

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
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const payload = await verifyToken(token);
        const { given_name, family_name, email, picture, sub } = payload;

        const user = {
            first_name: given_name,
            last_name: family_name,
            email,
            picture
        };

        res.cookie('session-token', token);

        return res.status(202).json({ user });
    } catch (error) {
        next(error);
    }
};

exports.signout = (req, res, next) => {
    try {
        res.clearCookie('session-token');
        return res.status(200).json({ message: 'Sign out!' });
    } catch (error) {
        next(error);
    }
};