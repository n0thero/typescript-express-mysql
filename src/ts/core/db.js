"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = require("mysql2");
var config_1 = require("./config");
var dbConfig = {
    host: config_1.default.db.host,
    user: config_1.default.db.user,
    password: config_1.default.db.password,
    database: config_1.default.db.database
};
var db = (0, mysql2_1.createConnection)(dbConfig);
db.connect(function (err) {
    if (err) {
        return;
    }
});
exports.default = db;
