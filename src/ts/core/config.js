"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var ini = require("ini");
var file_path = path.resolve(__dirname, '../../../config.ini');
var config = ini.parse(fs.readFileSync(file_path, 'utf-8'));
exports.default = config;
