const PORT = process.env.PORT || 8080

const knex = require('knex')({
    client:"postgres",
    connection: {
        host:'localhost',
        user:"root",
        password:"odil",
        database:"support"
    },
    pool: { min:0 , max:10 }
});

const connection = {
    connectionString:'postgres://postgres:odil@localhost:5432/support',
    connectionELString:'postgres://ukhrqjbb:UwlW5gZu198ewq-v_MXM6NTgDQfpUusl@stampy.db.elephantsql.com/ukhrqjbb'
}

const authOptions = {
    secret_key: 'support',
    tokenExpTime:1000
}

module.exports = {
    PORT,
    connection,
    authOptions,
    knex
}