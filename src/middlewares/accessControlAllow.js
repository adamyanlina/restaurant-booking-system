const accessControlAllow = (req, res, next) => {
  const methods = 'GET,PUT,POST,DELETE';
  const headers = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', methods);
  res.header('Access-Control-Allow-Headers', headers);

  if (req.method === 'OPTIONS') return res.send(200);

  next();
};

module.exports = accessControlAllow;