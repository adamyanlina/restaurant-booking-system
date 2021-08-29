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

        return res.render('me', { user, success: true });
    } catch (error) {
        console.log(error);
        next(error);
    }
};