const { Router } = require('express');

const router = Router();
router.all('/', async (req, res) => res.set('Content-Type', monutor.contentType).send(await monutor.metrics()));

module.exports = router;
