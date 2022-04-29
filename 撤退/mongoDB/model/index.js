const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/web", function(err) {
    if (err) {
        console.log('数据库链接失败');
    }
    console.log('数据库链接成功');
});

module.exports = mongoose;