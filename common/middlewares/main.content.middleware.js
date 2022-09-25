const jwt = require('jsonwebtoken'),
    secret = require('../config/env.config.js').jwt_secret,
    crypto = require('crypto');

exports.sendPage = (page) => {
    return (req, res) => {
        return res.json({"page":(page||"No Page Defined")});
    };
};