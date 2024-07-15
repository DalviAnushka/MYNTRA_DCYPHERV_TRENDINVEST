const express = require('express');
const router = express.Router();
const { invest, getInvestments } = require('../controllers/investmentController');
const authenticate = require('../middleware/authenticate');

router.post('/', authenticate, invest);
router.get('/', authenticate, getInvestments);

module.exports = router;
