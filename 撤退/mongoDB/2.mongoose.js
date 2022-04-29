const UserModel = require("./Model/user");

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push({username: 'name' + i, password: 123456});
};

(async () => {
    // let users = await UserModel.create(arr);
    // console.log(users);
    let find = await UserModel.find({});
    console.log(find, "findfindfind");
})();

//UserModel.create(arr);
