const { fetch, fetchAll } = require('../../lib/postgres')


const EXISTING_USER = `
    SELECT * FROM intex_users WHERE users_name = $1 AND users_password = $2
`

const CREATE_USER = `
INSERT INTO intex_users(users_name, users_password) VALUES($1,$2) RETURNING *
`

const exciting = (name, password) => fetch(EXISTING_USER, name,password)
// const createUser = (name, password) => fetch(CREATE_USER, name,password)

module.exports = {
    exciting,
    // createUser
}