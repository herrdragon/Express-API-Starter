// services/quoteService.js
"use strict";

const request = require("request-promise");

//==========================QUOTE CONFIGURATION EXPIRATION METHODS=============================
// Get Quote Expiration
exports.getQuoteExpiration = async (accessToken, xcurrent_endpoint) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/config/payments/quote_expiry",
        method: "GET",
        auth: {
            bearer: accessToken
        },
        headers: {
            "Content-Type": "application/json"
        },
        json: true
    })
}

// Set Quote Expiration
exports.setQuoteExpiration = async (accessToken, quote_ttl, xcurrent_endpoint) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/config/payments/quote_expiry",
        method: "PUT",
        auth: {
            bearer: accessToken
        },
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            quote_ttl: quote_ttl
        },
        json: true
    })
}

//==========================QUOTE OPERATIONS METHODS===========================================
// Get Quote Collection
exports.quoteCollections = async (accessToken, amount, xcurrent_endpoint, sender_currency, sending_account, receiving_account, sender_ripplenet_address, receiver_ripplenet_address) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/quote_collections",
        method: "POST",
        auth: {
            bearer: accessToken
        },
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            sending_address: sending_account + "@" + sender_ripplenet_address,
            receiving_address: receiving_account + "@" + receiver_ripplenet_address,
            amount: amount,
            currency: sender_currency,
            quote_type: "SENDER_AMOUNT"
        },
        json: true
    })
}

// Accept Quote
exports.postAcceptQuote = async (accessToken, quote_id, xcurrent_endpoint) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/payments/accept",
        method: "POST",
        auth: {
            bearer: accessToken
        },
        headers: {
            "content-type": "application/json"
        },
        body: {
            quote_id: quote_id
        },
        json: true
    })
}

// Get Quote Collection by ID
exports.getQuoteCollectionById = async (accessToken, quote_collection_id, xcurrent_endpoint) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/quote_collections/" + quote_collection_id,
        method: "GET",
        auth: {
            bearer: accessToken
        },
        headers: {
            "content-type": "application/json"
        },
        json: true
    })
}

// Get Quote by ID
exports.getQuoteById = async (accessToken, quote_id, xcurrent_endpoint) => {
    return await request({
        url: "http://" + xcurrent_endpoint + "/v4/quotes/" + quote_id,
        method: "GET",
        auth: {
            bearer: accessToken
        },
        headers: {
            "content-type": "application/json"
        },
        json: true
    })
}
