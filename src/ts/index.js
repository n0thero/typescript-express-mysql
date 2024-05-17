"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./user");
var app = express();
app.get('/', function (req, res) {
    user_1.default.find(1)
        .then(function (result) {
        res.json(result);
    });
});
app.listen(3000, function () {
    console.log('server running');
});
