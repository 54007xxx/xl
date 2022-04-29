let mongoose = require('mongoose')
let conn = mongoose.createConnection('mongodb://localhost/runoob', { useNewUrlParser: true })
let MessageSchema = new mongoose.Schema({
    username: String,
    content: String,
    createAt: {type: Date, default: Date.now}
})

let Message = conn.model('Message', MessageSchema)
module.exports = { Message }