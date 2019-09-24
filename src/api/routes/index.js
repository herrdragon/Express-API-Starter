// api/routes/index.js
"use strict";

const express = require('express');
const router = express.Router();
const someRoutes = require('./someRoutes');

router.use('/here', quoteRoutes);

module.exports = router;
