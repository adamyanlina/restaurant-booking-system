exports.getAll = (req, res, next) => {
    try {
    // return res.json({ msg: "Hi, I'm 'users' controller"});
        return res.render('index');
    } catch (error) {
        next(error);
    }
};

exports.getMe = (req, res, next) => {
    try {
        const { user } = req;

        return res.render('me', { user });
    } catch (error) {
        next(error);
    }
};