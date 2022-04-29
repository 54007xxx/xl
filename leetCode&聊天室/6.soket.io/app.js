let express = require("express")
let app = express()
app.use(express.static(__dirname))

let server = require('http').createServer(app)
let io = require('socket.io')(server)
io.on('connection', function(socket) {
    console.log('服务接受中')
    socket.on('message', function(message) {
        socket.emit('message', message+'hello')
    })
})

server.listen(3000)

