const express = require('express')
const db = require('./db.json')
const app = express()
const port = 5000

app.use('/', (req, res) => {
  res.json(db)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})