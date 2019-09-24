// api/routes/someRoutes.js
"use strict";

const { getSomeService } = require('../../controllers/someController');
const { handleErrors } = require('../../services/helper');
const bodyParser = require("body-parser");
const express = require('express');
const router = express.Router();

const jsonParser = bodyParser.json()

router.get('/thisway', jsonParser, handleErrors(getSomeService));

router.post('/thatway', jsonParser, handleErrors(getSomeService));

module.exports = router;
