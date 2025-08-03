const express = require('express');
const router = express.Router();
const { login, register,getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/login', login);
router.post('/register', register);
router.get('/dashboard', authMiddleware, getUser);
module.exports = router;
