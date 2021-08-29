const Metrics = (app) => app.use(async (req, res, next) => {
  const end = metrics.httpRequestDurationMicroseconds.startTimer();
  next();
  end({
    route: req.url,
    code: res.statusCode,
    method: req.method,
  });
});
module.exports = Metrics;
