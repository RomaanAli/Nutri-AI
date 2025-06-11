const express = require('express');
const router = express.Router();
const dietPlanController = require('../controllers/dietPlanController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, dietPlanController.recommendDiet);

module.exports = router;
