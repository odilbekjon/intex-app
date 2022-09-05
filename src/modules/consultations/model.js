const { fetch, fetchAll } = require('../../lib/postgres')


const CONSULTATIONS = `
SELECT consultation_id AS id, consultation_client AS client, consultation_cl_phone AS phone,
consultation_time AS time, consultation_status AS status FROM intex_consultations
`
const DELETE = `
  DELETE FROM intex_consultations WHERE consultation_id = $1 RETURNING *
`

const consultations = () => fetchAll(CONSULTATIONS)
const deleteConsultation = (id) => fetch(DELETE, id)

 
module.exports = {
  consultations,
  deleteConsultation
}