const express = require('express');
const { getAllUser, postUserData } = require('../controller/user.controller');
const Router = express.Router();

Router.post('/', postUserData);

module.exports = Router;
