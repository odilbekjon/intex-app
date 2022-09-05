const { compare, hash  } = require('bcrypt')

const hashPassword = async (password) => {
    try {
        const result = await hash(password, 10)
        return result
    } catch (_) {}
}

const comparePassword = async (password, hash) => {
    try {
        const result = await compare(password, hash)
        return result
    } catch (_) {}
}

module.exports = {
    hashPassword, comparePassword
}

