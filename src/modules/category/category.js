const model = require('./model')
 
module.exports = {
    GET: async (_,res) => {
        try {
            res.json(await model.categories())
        } catch (error) {
            res.sendStatus(500)
        }
    },
    POST: async (req,res) => {
        const { nameRu , nameUz } = req.body
        try {
            res.json(await model.categoriesPost(nameRu, nameUz))
        } catch (error) {
            res.sendStatus(500)
        }
    },
    PUT: async (req,res) => {
        const { nameRu , nameUz ,id} = req.body
        try {
            res.json(await model.categoriesUpdate(nameRu , nameUz , id))
        } catch (error) {
            res.sendStatus(500)
        }
    },
    DELETE: async (req,res) => {
        const { id } = req.body
        try {
            res.json(await model.categoriesDelete(id))
        } catch (error) {
            res.sendStatus(500)
        }
    }
}