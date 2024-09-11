const express = require('express');
const router = express.Router();
const articleAdminController = require('../controllers/admin/article')
const checkUser = require('../utils/userCheck')

// Handle GET request to render the login page
router.get('/admin/article/create', checkUser('admin') ,(req, res) => res.render('createArticle'));

router.post('/admin/article/create' , checkUser('admin') , (req, res) => articleAdminController.createNewArticle(req, res));

router.get('/admin/article/edit/:id', checkUser('admin') ,(req, res) => res.render('edit'));

router.post('/admin/article/edit/:id' , checkUser('admin') , (req, res) => articleAdminController.updateArticle(req, res));

router.all('/admin/article/delete/:id' , checkUser('admin') , (req, res) => articleAdminController.deleteArticle(req, res));

module.exports = router;