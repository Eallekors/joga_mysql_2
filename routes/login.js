const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login')

router.post('/login', (req, res) => loginController.login(req, res))

module.exports = router