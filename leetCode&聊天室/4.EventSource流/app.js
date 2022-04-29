let express = require('express')
let app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.send('安排篇')
})

// 不能跨域
let counter = 0;
app.get('/clock', function (req,res) {
    res.header("Content-Type", "text/event-stream")
    let $timer = setInterval(function() {
        res.write(`id:${counter++}\nevent:message\ndata:${new Date().toLocaleString()}\n\n`)
    }, 1000)
    res.on('close', function () {
        clearInterval($timer)
    })
})

app.listen(8080, function() {
    console.log('服务启动')
})
