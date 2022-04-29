const mongoose = require("./index");
const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    gender: Number
}, {
    timestamps: {
        createAt: 'createAt',
        updateAt: 'updateAt'
    }
});
const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;