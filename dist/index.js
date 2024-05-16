"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("./user");
const app = (0, express_1.default)();
const user = new user_1.User('nothero');
app.get('/', (req, res) => {
    res.send(`hello, ${user.getName()}`);
});
app.listen(3000, () => {
    console.log('server running');
});
