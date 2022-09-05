const model = require('./model') 
const { sign } = require('../../lib/jwt')

module.exports = {
    POST: async (req,res) => {
        try {
            const { name, password } = req.body
            // console.log(name,password);

            if(!name || !password){
                return res.status(400).json({
                    message:"Enter valid credentials"
                })
            }          

            const existingUser = await model.exciting(name ,password)
            // console.log(existingUser)

            if(!existingUser) {
                return res.sendStatus(400)
            }

            return res.status(400).json({
                message:"OK",
                access_token: sign({ id:existingUser?.users_id }),
                role: existingUser?.users_role
            })
        } catch (error) {
            console.log(error);
        }
    }
}