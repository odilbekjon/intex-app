const jwt = require('jsonwebtoken')
const { authOptions: { tokenExpTime, secret_key } } = require('../config')

const sign = (payload) => jwt.sign(payload, secret_key, {
    expiresIn:'150s'
})

const verify = (token) => jwt.verify(token, secret_key)

module.exports = {
    sign,verify
}