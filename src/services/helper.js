// services/helper.js
"use strict";

const NodeCache = require("node-cache");
const cache = new NodeCache();

function setKeyValue(key, value, expiration) {
    if (expiration != null) {
        cache.set(key, value, expiration)
    } else {
        cache.set(key, value, 0);
    }
}

function getKeyValue(key) {
    return cache.get(key);
}

const handleErrors = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};

module.exports = {
    cache: cache,
    setKeyValue: setKeyValue,
    getKeyValue: getKeyValue,
    handleErrors: handleErrors
};
