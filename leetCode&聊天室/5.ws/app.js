let express = require('express')
let app = express()
app.use(express.static(__dirname))
app.listen(3000)
// 不兼容浏览器
let WebSockerServer = require('ws').Server;
let server = new WebSockerServer({port: 8888})
server.on('connection', function (socket) {
    socket.on('message', function (message) {
        console.log(message)
        socket.send('已接收', message)
    })
})
