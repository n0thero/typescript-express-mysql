"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./core/db");
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.find = function (id) {
        return new Promise(function (resolve) {
            db_1.default.query("\n                SELECT *\n                FROM users\n                WHERE id = '".concat(id, "'\n                LIMIT 1"), function (err, result) {
                resolve(result);
            });
        })
            .then(function (result) { return result; });
    };
    return User;
}());
exports.default = User;
