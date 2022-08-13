"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = require("knex");
exports.default = knex_1.knex({
    client: 'postgresql',
    connection: {
        database: 'demo_auth',
        user: 'postgres',
        password: '123456'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
});
