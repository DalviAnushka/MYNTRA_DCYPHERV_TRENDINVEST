const express = require('express');
const router = express.Router();
const { calculateWinner } = require('../controllers/winnerController');

router.get('/calculate', calculateWinner);

module.exports = router;
