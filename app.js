'use strict'

// NPM PACKAGES
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.static(__dirname + 'view'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('Server connected to client!')

  socket.on('', (data) => {})
})

// SET UP SERVER ENVIRONMENT
var port = process.env.PORT || 3000
server.listen(port, function() {
  console.log('Server running on port ' + port)
})

app.on('error', function() {
  console.log(error)
})

module.exports = app
