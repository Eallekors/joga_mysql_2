//app pack
const express = require('express')
const sessions = require('express-session')

const app = express()

const path = require('path')
// add template engine
const hbs = require('express-handlebars');
// setup template engine directory and files extensions
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))
//setup static public directory
app.use(express.static('public'));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessions({
    secret: "thisismysecretkey",
    saveUninitialized: true,
    cookie: {maxAge: 100 * 60 * 60 * 24},
    resave: false
}))


const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');

app.use('/', userRoutes)
app.use('/', articleRoutes)
app.use('/', authorRoutes)
app.use('/', loginRoutes)
app.use('/', adminRoutes)

app.listen(3025, () => {
    console.log('App is started at http://localhost:3025')
})



  