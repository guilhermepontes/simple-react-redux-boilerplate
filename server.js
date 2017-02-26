var express = require('express')
var path = require('path')
var compression = require('compression')

var app  = express()

app.use(compression())
app.use(express.static('public'))
app.use('/dist', express.static('dist'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(8080)
