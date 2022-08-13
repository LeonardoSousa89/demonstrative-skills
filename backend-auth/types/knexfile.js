"use strict";
module.exports = {
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
};
