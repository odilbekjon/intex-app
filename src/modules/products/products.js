const model = require('./model')
 
module.exports = {
    GET: async (req,res) => {
        try {
            res.json(await model.products())
        } catch (error) {
            res.sendStatus(500)
        }
    },
    GET_BY_ID: async (req,res) => {
        const { id } = req.params
        try {
            res.json(await model.ProductsId(id))
        } catch (error) {
            res.sendStatus(500)
        }
    },
    POST: async (req,res) => {
        const { name , type, oldPrice, newPrice, count, frame, size, depth} 
        = req.body
        try {
            const productPost = await model.ProductsPost(name, type, oldPrice, newPrice, count, frame, size, depth)
            res.json(productPost)
        } catch (error) {
            res.sendStatus(500)
        }
    },
    PUT: async (req,res) => {
        const { name, id } = req.body
        try {
            res.json(await model.ProductsPut(name, id))
        } catch (error) {
            res.sendStatus(500)
        }
    },
    DELETE: async (req,res) => {
        const { id } = req.body
        try {
            res.json(await model.ProductsDelete(id))
        } catch (error) {
            res.sendStatus(500)
        }
    }
}