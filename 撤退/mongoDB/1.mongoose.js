const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/web", function(err) {
    if (err) {
        console.log('数据库链接失败');
    }
    console.log('数据库链接成功');
});

// 1.骨架创建
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true, //去掉前后空格
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        // maxlength: 10,
        // minlength: 6
        validate: {
            validator(value) {
                return true
            }
        }
    },
    age: {
        type: Number,
        default: 6,
        min: 0,
        max: 120
    },
    gender: {
        type: Number,
        enum: [0,1]
    }
}, {
    timestamps: {
        createAt: 'createAt',
        updateAt: 'updateAt'
    }
});

// 2.创建一个数据库的模型（集合） 来操作数据库 默认创造一个 小写+s的集合
const UserModel = mongoose.model("User",UserSchema);

(async () => {
    let r = await UserModel.create({username: 'gm', password: 123456, age: 24});
    console.log(r);
    mongoose.disconnect();
})();


