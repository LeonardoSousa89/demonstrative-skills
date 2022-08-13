"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
var Method = /** @class */ (function () {
    function Method() {
    }
    Method.prototype.method = function () {
        console.log('function');
    };
    return Method;
}());
exports.default = Method;
function data() {
    return 'data';
}
exports.data = data;
