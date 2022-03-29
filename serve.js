const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('dist'))

app.use('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'))
})

app.listen(8080, () => {
  console.log('http://localhost:8080')
})