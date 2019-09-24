// config/express.js
"use strict";

const routes = require('../api/routes');
const express = require('express');
const app = express();

app.use('/', routes);

module.exports = app;
