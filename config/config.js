require('dotenv').config()

module.exports = {
    development: {
        dialect: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        migrationStorage: 'json',
        migrationStoragePath: 'migrationsExecuted.json',
        seederStorage: 'json',
        seederStoragePath: 'seedersExecuted.json',
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:',
    },
    production: {
        dialect: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
    },
}
