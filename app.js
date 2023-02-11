const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { connectMongoDb } = require('./databases/mongodb.connection');
const cors = require('cors');
require('dotenv').config();

//requires routers
const indexRouter = require('./src/routes/index.router');
const clubesRouter = require('./src/routes/clubes.router');


const app = express();

connectMongoDb();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//resources
app.use('/', indexRouter);
app.use('/clubes', clubesRouter);



module.exports = app;
