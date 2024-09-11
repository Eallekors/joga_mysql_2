const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

// Handle GET request to render the login page
router.get('/login', (req, res) => res.render('login'));

// Handle POST request for login submission
router.post('/login', (req, res) => loginController.login(req, res));

module.exports = router;
