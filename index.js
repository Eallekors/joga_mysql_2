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


app.listen(3025, () => {
    console.log('App is started at http://localhost:3025')
})