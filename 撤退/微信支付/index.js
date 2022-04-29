var fs = require('fs')
let a = require('./a.js');
let path = require('path');

let pages = "示范区疫情防控 全员登记 防疫登记上报 龙康码 场所到访人信息登记码 扫码登记记录 本人扫描记录 防疫管理 返濮上报 详情".split(" ");

function removeDir(p) {
    let statObj = fs.statSync(p); // fs.statSync同步读取文件状态，判断是文件目录还是文件。
    if (statObj.isDirectory()) { //如果是目录
        let dirs = fs.readdirSync(p) //fs.readdirSync()同步的读取目标下的文件 返回一个不包括 '.' 和 '..' 的文件名的数组['b','a']
        dirs = dirs.map(dir => path.join(p, dir))  //拼上完整的路径
        for (let i = 0; i < dirs.length; i++) {
            // 深度 先将儿子移除掉 再删除掉自己
            removeDir(dirs[i]);
        }
        fs.rmdirSync(p); //删除目录
    } else {
        fs.unlinkSync(p); //删除文件
    }
}

// removeDir(__dirname + '\\a');

    a.forEach((item, index) => {
        let ifTrue = pages.includes(item.style.navigationBarTitleText)
        let ii = item.path.split('/')
        let url = `${path.resolve()}\\${ii[0]}\\${ii[1]}`

        if (!ifTrue) {
            let abc = fs.existsSync(url);
            if (abc) {
                removeDir(url);
                delete a[index];
            } else {
                delete a[index];
            }
        }
    })

    console.log(a, ",,,,")