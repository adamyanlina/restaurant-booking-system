exports.getAll = (req, res, next) => {
  try {
    return res.json({ msg: "Hi, I'm 'users' controller"});
  } catch (error) {
    next(error);
  }
};