const IpHandler = (req, res, next) => {
  req.body.requestIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return next();
};

module.exports = IpHandler;
