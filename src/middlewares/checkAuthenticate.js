const { verifyToken } = require('../utils/verifyToken');

exports.checkAuthentificate = async (req, res, next) => {
    try {
        const token = req.cookies['session-token'];
        if (!token) throw new Error('Token was not provided');

        const payload = await verifyToken(token);
        const { name, email, picture, sub } = payload;

        // Here user is temprorary variable to check
        const user = { name, email, picture, sub }; // TODO: Subject to removal

        // TODO: Find user by ID in POSTGRES Database (Sequelize)
        // const user = await User.findOne(sub).exec();
        // if (!user) throw new Error('Not authorized');
        req.user = user;
        return next();
    } catch (error) {
        next(error);
    }
};