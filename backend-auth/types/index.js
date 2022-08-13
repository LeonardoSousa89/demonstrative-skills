"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var port = 3004;
var knex_js_1 = __importDefault(require("./config/knex.js"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default({ origin: '*' }));
app.get('/auth', function (req, res) {
    knex_js_1.default('auth').select('*')
        .then(function (e) { return res.status(200).json(e); })
        .catch(function (err) { return res.status(400).json(err); });
});
app.listen(port, function () {
    var msg = "online into port :" + port + ", " + knex_js_1.default;
    console.log(msg);
});
