import { knex } from 'knex'

export default knex({

    client: 'postgresql',
        connection: {
        database: 'demo_auth',
        user:     'postgres',
        password: '123456'
    },
        pool: {
        min: 2,
        max: 10
    },
        migrations: {
        tableName: 'knex_migrations'
    }
})

