const express = require('express')
const app = express()
const port = 3000

app.get('/name', (req, res) => {
  req.statusCode = 200
  res.send('Hello World!123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

