'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//carregar as rotas
const indexRoute = require('./routes/index-route');
const amostrasRoute = require('./routes/all-route');

//get post put delete (status 200 ok 201 created 400 badrequest 401 naoatenticado)
app.use('/', indexRoute);
app.use('/usuario', amostrasRoute);

//teste
module.exports = app;
