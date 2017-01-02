var express = require('express')
var path = require('path')
var compression = require('compression')

var app  = express()
var port = 8080

app.use(
  compression()
)

app.use(express.static('public'))
app.use('/dist', express.static('dist'))

app.get('*', function (req, res) {
  res.sendFile(
    path.join(__dirname, 'public', 'index.html')
  )
})

app.listen(port, function () {
  console.log('Server running at localhost:' + port)
})