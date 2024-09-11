//app pack
const express = require('express')
const sessions = require('express-session')


const app = express()

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



  