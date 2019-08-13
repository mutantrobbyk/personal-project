require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`))
})
 