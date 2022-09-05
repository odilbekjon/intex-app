const model = require('./model')
 
module.exports = {
    GET: async (_,res) => {
        try {
            res.json(await model.consultations())
        } catch (error) {
            res.sendStatus(500)
        }
    },
    DELETE: async (req,res) => {
        const { id } = req.body
        try {
            res.json(await model.deleteConsultation(id))
        } catch (error) {
            res.sendStatus(500)
        }
    },
}