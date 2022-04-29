let express = require("express")
// import { Message } from "./db.js"
let {Message} = require('./db.js')
let app = express()
app.use(express.static(__dirname))

let server = require('http').createServer(app)
let io = require('socket.io')(server)
let SYSTEM = '系统'
let sockets = {}
let rooms = [] //代表此客户端进入的所有房间

io.on('connection',async function(socket) {
    let username;
    // console.log('服务接受中')

    socket.on('join', function (roomName) {
        let index = rooms.indexOf(roomName)
        if (index == -1) {
            rooms.push(roomName)
            socket.join(roomName)
            socket.emit('joined', roomName)
        }
    })

    socket.on('leave', function(roomName) {
        let index = rooms.indexOf(roomName)
        if (index != -1) {
            rooms.splice(index ,1)
            socket.leave(roomName);
            socket.emit('leaved', roomName)
        }
    })

    socket.on('getAllMessages', async function() {
        let messages = await Message.find().sort({ createAt: -1 }).limit(6)
        messages.reverse()
        socket.emit('allMessages', messages)
    })

    socket.on('message', async function(content) {
        if (username) {
            let result = content.match(/@([^ ]+) (.+)/) //私人聊天
            if (result) {
                let toUser = result[1]
                let toContent = result[2]
                let toSocket = sockets[toUser]
                toSocket&&toSocket.emit('message', getMsg(toContent, username))
            } else { //公共聊天
                let savedMessage = await Message.create(getMsg(content, username))
                if (rooms.length > 0) { //房间概念
                    rooms.forEach(room => {
                        io.in(room).emit('message',savedMessage)
                    })
                } else {
                    // 大厅说话都可以听到
                    io.emit('message', savedMessage)
                }
            }
        } else {
            let oldSocket = sockets[content];
            if (oldSocket) {
                socket.emit('message', getMsg(`${content}已经被占用请换一个用户名吧！`))
            } else {
                username = content;
                sockets[username] = socket
                // 告诉所有的客户端有新的用户加入了聊天室
                socket.broadcast.emit('message', getMsg(`${username}加入聊天室`))
            }
        }
    })
})

server.listen(3000)

function getMsg(content, username=SYSTEM) {
    return { username, content, createAt: new Date() }
}
