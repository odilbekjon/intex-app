const { fetch, fetchAll } = require('../../lib/postgres')


const CITE = `
SELECT cite_id AS id, cite_phone AS phone, cite_address_ru AS address_ru, cite_address_uz AS address_uz, cite_time_ru AS time_ru, cite_time_uz AS time_uz, cite_telegram AS telegram, cite_instagram AS instagram FROM intex_cite
`

const CITE_PUT = `
  UPDATE intex_cite SET cite_phone=$1, cite_address_ru=$2, cite_address_uz=$3, cite_time_ru=$4,
  cite_time_uz=$5, cite_telegram=$6, cite_instagram=$7
  WHERE cite_id = $8 RETURNING *
`

const cite = () => fetchAll(CITE)
const citeUpdate = (phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId) => fetch(CITE_PUT,phone,addressRu,addressUz,timeRu,timeUz,telegram,instagram,citeId)

 
module.exports = {
  cite, citeUpdate
}