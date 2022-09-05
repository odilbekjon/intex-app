const model = require('./model')
 
module.exports = {
    GET: async (_,res) => {
        try {
            res.json(await model.orders())
        } catch (error) {
            res.sendStatus(500)
        }
    },
    DELETE: async (req,res) => {
        const { id } = req.body
        try {
            res.json(await model.ordersDelete(id))
        } catch (error) {
            res.sendStatus(500)
        }
    }
}