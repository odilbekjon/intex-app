const { fetch, fetchAll } = require('../../lib/postgres')


const PRODUCTS = `
SELECT product_id AS id, product_name AS name , product_type AS type , 
product_price_old AS priceOld , product_price_new AS priceNew , 
product_count AS count, product_frame AS frame , product_size AS size , 
product_depth AS depth, product_date AS date, product_lang AS lang, product_image AS img , 
category_id AS categoryId 
FROM intex_products
`

const PRODUCTS_ID = `
  SELECT * FROM intex_products WHERE product_id = $1 
`

const PRODUCTS_POST = `
  INSERT INTO intex_products( product_price_old, product_price_new,product_count,product_size, product_depth, ) 
  VALUES($1,$2,$3,$4,$5,$5,$6,$7,$8) RETURNING *
`

const PRODUCTS_PUT = `
  UPDATE intex_products SET product_name = $1, product_type = $2, product_price_old = $3, product_price_new = $4,product_count = $5,product_frame = $6,product_size = $7, product_depth = $8
  WHERE center_id = $9 RETURNING *
`

const PRODUCTS_DELETE = `
  DELETE FROM intex_products WHERE product_id = $1 RETURNING *
`



const products = () => fetchAll(PRODUCTS)
const ProductsId = (id) => fetch(PRODUCTS_ID, id)
const ProductsPost = (name, type, oldPrice, newPrice, count, frame, size, depth, productId) => fetch(PRODUCTS_POST, name, type, oldPrice, newPrice, count, frame, size, depth, productId)
const ProductsPut = ( name, id) => fetch(PRODUCTS_PUT, name, id)
const ProductsDelete = (id) => fetch(PRODUCTS_DELETE, id)

module.exports = {
  products,
  ProductsId,
  ProductsPost,
  ProductsPut,
  ProductsDelete,
}