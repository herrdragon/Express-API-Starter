// api/routes/index.js
"use strict";

const express = require('express');
const router = express.Router();
const quoteRoutes = require('./quoteRoutes');

router.use('/quote', quoteRoutes);

module.exports = router;
