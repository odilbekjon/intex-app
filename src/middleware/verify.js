const { verify, TokenExpiredError, JsonWebTokenError} = require('jsonwebtoken')
const { authOptions: { secret_key } } = require('../config')

module.exports = (req,res,next) => {
    const { access_token } = req.headers

    if(!access_token) {
        return res.status(401).json({
            message:"provide access token"
        })
    }
    
    verify(access_token, secret_key, (err, dec) => {
        if(err instanceof  TokenExpiredError) {
            return res.status(401).json({ status: 401, message:"Token expired"})
        }

        if(err instanceof  JsonWebTokenError) {
            return res.status(401).json({ status: 401, message:"Invalid token"})
        } 
        
        next()
    })
}