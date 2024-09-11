const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/users/register', (req, res) => res.render('register'));

router.post('/users/register', (req, res) => userController.register(req, res));

module.exports = router