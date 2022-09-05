const express = require('express')
const app = express() 
const modules = require('./modules')
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(modules)


app.listen(PORT, console.log(PORT))