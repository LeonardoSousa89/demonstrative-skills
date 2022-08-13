"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_js_1 = __importDefault(require("./knex.js"));
function authenticate() {
    var authUser = knex_js_1.default('auth')
        .select('*')
        .then(function (resp) { return resp; })
        .catch(function (err) { return err; });
    var authUserConsole = knex_js_1.default('auth')
        .select('*')
        .then(function (resp) { return console.log(resp); })
        .catch(function (err) { return console.log(err); });
    return { authUser: authUser, authUserConsole: authUserConsole };
}
exports.default = authenticate;
