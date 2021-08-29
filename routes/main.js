const { Router } = require('express');

const router = Router();
router.all('/', async (req, res) => res.status(200).json({ home: process.env.ServerName, ip: req.body.requestIp }));

module.exports = router;
