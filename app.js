// app.js
const createError = require('http-errors');
const express = require('express');
const path = require('path');

const { dbMiddleware } = require('./bin/db');

// Routers
const indexRouter = require('./routes/index'); //Home Page
const commentsRouter = require('./routes/comments'); //Comments Page
const menuRouter = require('./routes/menu'); //Menu Page
const aboutRouter = require('./routes/about'); //About Page

const app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(dbMiddleware);

// Routes
app.use('/', indexRouter); //Home page
app.use('/comments', commentsRouter); //Comments page
app.use('/menu', menuRouter); //Menu Page
app.use('/about', aboutRouter); //About Page

// 404 handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;