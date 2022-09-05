const { fetch, fetchAll } = require('../../lib/postgres')


const PRODUCT_CATEGORY = `
  SELECT * FROM intex_category
`

const CATEGORY_POST = `
  INSERT INTO intex_category(category_name_ru, category_name_uz) VALUES($1,$2) RETURNING *
`

const CATEGORY_UPDATE = `
  update intex_category set category_name_ru = $1, category_name_uz = $2 where category_id = $3 RETURNING *
`

const CATEGORY_DELETE = `
  DELETE FROM intex_category WHERE category_id = $1 RETURNING *
`

const categories = () => fetchAll(PRODUCT_CATEGORY)
const categoriesPost = (nameRu, nameUz) => fetch(CATEGORY_POST, nameRu, nameUz)
const categoriesUpdate = (nameRu, nameUz , id) => fetch(CATEGORY_UPDATE, nameRu, nameUz, id)
const categoriesDelete = (id) => fetch(CATEGORY_DELETE, id)

 
module.exports = {
  categories,
  categoriesPost,
  categoriesUpdate,
  categoriesDelete
}