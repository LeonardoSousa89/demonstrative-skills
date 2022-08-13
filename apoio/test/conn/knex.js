const knex = require('knex')
module.exports = knex({
        client: 'postgresql',
        connection: {
        database: 'test_express',
        user:     'postgres',
        password: '123456'
    },
        pool: {
        min: 2,
        max: 10
    }
})
