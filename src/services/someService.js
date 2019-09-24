// services/someService.js
"use strict";

const request = require("request-promise");

// Get Some Service
exports.getSomeService = async (param1, param1) => {
    return await request({
        url: "http://addrees-to-data",
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
