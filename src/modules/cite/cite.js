const model = require('./model')
 
module.exports = {
    GET: async (_,res) => {
        try {
            res.json(await model.cite())
        } catch (error) {
            res.sendStatus(500)
        }
    },
    PUT: async (req,res) => {
        const { phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId } = req.body
        try {
            res.json(await model.citeUpdate(phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId))
        } catch (error) {
            res.sendStatus(500)
        }
    }
}