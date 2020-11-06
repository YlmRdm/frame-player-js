const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/')); 

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/frame-player.html'))
})

app.get('/example', function(req, res) {
  res.sendFile(path.join(__dirname + '/example/index.html'))
  const path = 'example/index.html'
  
})

app.listen(3000, function () {
  console.log('Listening on port:' + port)
})