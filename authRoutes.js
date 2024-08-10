const express = require('express');
const router = express.Router();
const cors = require('cors');
const authController = require('../controllers/authController');

router.use(cors());
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;