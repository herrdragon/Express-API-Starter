// services/xcurrentService.js
"use strict";

const fs = require("fs");
const path = require("path");
const request = require("request-promise");
const cache = require("../services/helper");

// Load input json file
const conf = JSON.parse(
    fs.readFileSync(path.resolve(__dirname + "/../config/credentials.json"), "utf8")
);
console.log(conf.xcurrent_endpoint)

// Get token
async function getToken(username = conf.username, password = conf.password, xcurrent_endpoint = conf.xcurrent_endpoint) {
    if (!cache.getKeyValue("token")) {
        try {
            const token = await request({
                url: "http://" + xcurrent_endpoint + "/oauth/token",
                method: "POST",
                auth: {
                    user: username,
                    pass: password
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    grant_type: "client_credentials"
                }
            });
            console.log("Getting new token");
            cache.setKeyValue("token", JSON.parse(token).access_token, parseInt(JSON.parse(token).expires_in));
            return JSON.parse(token).access_token;
        } catch (e) { console.log(e) }
    } else {
        console.log("Getting current token");
        return cache.getKeyValue("token");
    }
}

// Get heartbeat
async function getHeartbeat(accessToken, xcurrent_endpoint) {
    try {
        return await request({
            url: "https://" + xcurrent_endpoint + "/v4/heartbeat",
            method: "GET"
        })
    } catch (error) {
        // ... error checks
        console.log("error in api.js: " + error);
    };
}

module.exports = { getToken: getToken, getHeartbeat: getHeartbeat };
