let express = require('express')
let app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.send('安排篇')
})

app.get('/clock', function (req,res) {
    let $timer = setInterval(function() {
        let date = new Date();
        let seconds = date.getSeconds();
        if (seconds % 5 === 0) {
            res.send(date.toLocaleString())
            clearInterval($timer)
        }
    }, 1000)
    res.send(new Date().toLocaleString())
})

app.listen(8080, function() {
    console.log('服务启动')
})