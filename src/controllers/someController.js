// controllers/someController.js
"use strict";

const { getSomeService } = require('../services/someService')
const input = require('../config/credentials')

// Get Some Service
exports.getSomeService = async (req, res) => {
    const token = await getToken(input.username, input.password, input.other);
    res.send(await getSomeService(token, param));
}
