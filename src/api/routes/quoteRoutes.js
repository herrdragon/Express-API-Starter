// api/routes/quoteRoutes.js
"use strict";

const { getQuoteExpiration, setQuoteExpiration, quoteCollections, postAcceptQuote, getQuoteCollectionById, getQuoteById } = require('../../controllers/quoteController');
const { handleErrors } = require('../../services/helper');
const bodyParser = require("body-parser");
const express = require('express');
const router = express.Router();

const jsonParser = bodyParser.json()

router.get('/quote_expiry', jsonParser, handleErrors(getQuoteExpiration));
router.get('/get_collections/:id', jsonParser, handleErrors(getQuoteCollectionById));
router.get('/get_quote/:id', jsonParser, handleErrors(getQuoteById));

router.put('/quote_expiry', jsonParser, handleErrors(setQuoteExpiration));

router.post('/get_collections', jsonParser, handleErrors(quoteCollections));
router.post('/post_accept_quote', jsonParser, handleErrors(postAcceptQuote));

module.exports = router;
