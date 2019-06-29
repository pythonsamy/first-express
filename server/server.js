const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

var app = express()
var server = http.createServer(app)
var io = socketIO(server)

io.on('connection', (socket)=>{
    console.log('new User conection')
    
    socket.on('disconected', ()=>{
        console.log('User disconected')
    })
})
app.use(express.static(publicPath))




server.listen(port,()=>{
    console.log(`server run on http://localhost:${port} `)
})