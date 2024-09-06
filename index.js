//app pack
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()
const authorControllerClass = require('./controllers/author')
const authorController = new authorControllerClass();


const articleRoutes = require('./routes/article');
app.get('/', (req, res) => articleController.getAllArticles(req, res));
app.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
app.get('/author/:id', (req, res) => authorController.getAuthorById(req, res));
app.all('/article/edit/:id', (req, res) => articleController.updateArticle(req, res));
app.all('/article/delete/:id', (req, res) => articleController.deleteArticle(req, res));
app.post('/article/create', (req, res) => articleController.createNewArticle(req, res));

app.listen(3025, () => {
    console.log('App is started at http://localhost:3025')
})