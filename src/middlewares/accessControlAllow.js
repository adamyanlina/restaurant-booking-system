const accessControlAllow = (req, res, next) => {
    const methods = 'GET,PUT,POST,DELETE';
    const headers = 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie, *';
    const cookieConfig = 'SameSite=None; Secure';

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', methods);
    res.header('Access-Control-Allow-Headers', headers);
    res.header('Set-Cookie', cookieConfig);
    res.header('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') return res.send(200);

    next();
};

module.exports = accessControlAllow;