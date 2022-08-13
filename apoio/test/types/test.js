"use strict";
/**
testes de lógica, unitário e integração.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//testes de integração 
var testimport_js_1 = require("./testimport.js");
var testimport_js_2 = require("./testimport.js");
var testPage_js_1 = __importDefault(require("./testPage.js"));
console.log(testimport_js_1.data);
console.log(testimport_js_2.func);
//testes de parametros class
var cls = new testPage_js_1.default();
cls.method();
//testes de parametros function
/**
    date()
 */
//testes de parametros para interface
/*
        let objeto :date = {
            name:'Chan'
        }
        objeto.name = 'Arnold'
        console.log(objeto)
*/
//testes de parametro para tipo: type
/*
        const objeto :date = {
            code:011
        }
        objeto.code = 322
        console.log(objeto)
 */
