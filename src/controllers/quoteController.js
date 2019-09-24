// controllers/quoteController.js
"use strict";

const { getToken } = require('../services/xcurrentService')
const { getQuoteExpiration, setQuoteExpiration, quoteCollections, postAcceptQuote, getQuoteCollectionById, getQuoteById } = require('../services/quoteService')
const input = require('../config/credentials')

//==========================QUOTE CONFIGURATION EXPIRATION METHODS=============================
// Get Quote Expiration
exports.getQuoteExpiration = async (req, res) => {
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    res.send(await getQuoteExpiration(token, input.xcurrent_endpoint));
}

// Set Quote Expiration
exports.setQuoteExpiration = async (req, res) => {
    const ttl = parseInt(req.body.quote_ttl);
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    res.send(await setQuoteExpiration(token, ttl, input.xcurrent_endpoint));
}

//==========================QUOTE OPERATIONS METHODS===========================================
// Get Quote Collection
exports.quoteCollections = async (req, res) => {
    const sender_account = req.body.sender_account;
    const sender_ripplenet_address = req.body.sender_ripplenet_address;
    const receiver_ripplenet_address = req.body.receiving_address;
    const sender_currency = req.body.currency;
    const quote_type = req.body.quote_type;
    const amount = req.body.amount;
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    const quote = await quoteCollections(token, amount, input.xcurrent_endpoint, sender_currency, sender_account, input.receiving_account, sender_ripplenet_address, receiver_ripplenet_address);
    res.send(quote); //object
}

// Accept Quote
exports.postAcceptQuote = async (req, res) => {
    const quote_id = req.body.quote_id;
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    const quote = await postAcceptQuote(token, quote_id, input.xcurrent_endpoint);
    res.send(quote); //object
}

// Get Quote Collection by ID
exports.getQuoteCollectionById = async (req, res) => {
    const quote_collection_id = req.params.id;
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    const quote = await getQuoteCollectionById(token, quote_collection_id, input.xcurrent_endpoint);
    res.send(quote); //object
}

// Get Quote by ID
exports.getQuoteById = async (req, res) => {
    const quote_id = req.params.id;
    const token = await getToken(input.username, input.password, input.xcurrent_endpoint);
    const quote = await getQuoteById(token, quote_id, input.xcurrent_endpoint);
    res.send(quote); //object
}
