const express = require('express')
const router = express.Router()
const middleware = require('../middleware/verify')

// modules
const Products = require('./products/products')
const Orders = require('./orders/orders')
const Consultations = require('./consultations/consultations')
const Cite = require('./cite/cite')
const users = require('./LoginUsers/users')
const Categories = require('./category/category')


router
    .get('/products', Products.GET)
    .get('/products/:id', Products.GET_BY_ID)
    .post('/products', Products.POST)
    .put('/products', Products.PUT)
    .delete('/products', Products.DELETE)

    // orders
    .get('/orders', Orders.GET)
    .delete('/orders', Orders.DELETE)

    // consultations
    .get('/consultations', Consultations.GET)
    .delete('/consultations', Consultations.DELETE)

    // cite
    .get('/cite', Cite.GET)
    .put('/cite', Cite.PUT)

    // login
    .post('/login',users.POST)
    
    // categories
    .get('/categories', Categories.GET)
    .post('/categories',Categories.POST)
    .put('/categories',Categories.PUT)
    .delete('/categories',Categories.DELETE)

module.exports = router