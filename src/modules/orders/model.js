const { fetch, fetchAll } = require('../../lib/postgres')


const ORDERS = `
SELECT zakas_id AS id, zakas_client AS client, zakas_cl_phone AS phone, zakas_size AS size, zakas_cost AS cost, zakas_address AS address, zakas_time AS time, zakas_status AS status, zakas_type AS type, zakas_img AS img FROM intex_zakas
`

const ORDERS_DELETE = `
  DELETE FROM intex_zakas WHERE zakas_id = $1 RETURNING *
`

const orders = () => fetchAll(ORDERS)
const ordersDelete = (id) => fetch(ORDERS_DELETE, id)


module.exports = {
  orders,
  ordersDelete
}