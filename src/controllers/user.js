const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const clientID = process.env.CLIENT_ID;

exports.getAll = (req, res, next) => {
    try {
    // return res.json({ msg: "Hi, I'm 'users' controller"});
        return res.render('index');
    } catch (error) {
        next(error);
    }
};

exports.getMe = async (req, res, next) => {
    try {
        const { user } = req;
        const apiVersion = process.env.API_VERSION;
        console.log('Uuuser: ', user);
        return res.render('me', { user, clientID, apiVersion });
    } catch (error) {
        console.log(error);
        next(error);
    }
};