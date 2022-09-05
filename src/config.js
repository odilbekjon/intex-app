const PORT = process.env.PORT || 8080

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
}