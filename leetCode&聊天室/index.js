// 字符串反转
let str = "name";
function reversal(str) {
    let z = '';
    for (let i = 0; i < str.length; i++) {
        z+=str[str.length-i-1]
    }
    return z
}

let z = reversal(str);
// console.log(z);

function reversal2(str) {
    let ss = str.split('').reverse().join('')
    return ss
}

let y = reversal2(str);
// console.log(y)

function reversal3(str) {
    let sl = str.length - 1;
    let charAt = '';
    for (let i = sl; i >= 0; i--) {
        charAt += str.charAt(i)
    }
    return charAt;
}
let x = reversal3(str)
// console.log(x, ">>>>")

// 数组反转
class arrays {
    constructor() {
        this.object = [1,28,28,798,3,2,3,3]
    }

    duplicateRemoval () {
        let objects = this.object;
        let newObjects = []
        for (let i = 0; i < objects.length;i++) {
            for (let j = 0; j < newObjects.length; j++) {
                console.log(objects[i], newObjects[j])
                if (objects[i] !== newObjects[j]) {
                    newObjects.push(newObjects[j])
                }
            }
        }
        console.log(newObjects, ">>>")
    }

    one() {
        let objects = this.object;
        console.log( objects.reverse() )
    }

    two() {
        let objects = this.object, c = [];
        objects.map(it => {
            c.unshift(it)
        })
        console.log(c)
    }

    three() {
        let objects = this.object;
        for (let i = 0, j = objects.length-1;i < objects.length / 2;i++,j--) {
            let t = objects[i]
            objects[i] = objects[j]
            objects[j] = t;
        }
        console.log(objects)
    }

    bubbling() {
        let objects = this.object;
        objects.sort(function(a,b) {
            return a - b
        })
        console.log(objects)
    }
}

let ars = new arrays()
ars['duplicateRemoval']()

// 水仙花数
// i^3 + j^3 + k^3 = ijk
let i,j,k;
for (i = 0; i <= 9; i++) {
    for (k = 0; k <= 9; k++) {
        for (j = 0; j <= 9; j++) {
            let ifl = i*i*i + k*k*k + j*j*j == Number(`${i}${k}${j}`);
            if (ifl && `${i}${k}${j}` > 100) {
                // console.log(Number(`${i}${k}${j}`));     
            }
        }
    }
}

// 水仙花数
function c(uuu) {
    let baiw = Math.floor(uuu / 100)
    let shiw = Math.floor(uuu / 10 % 10);
    let gew = uuu % 100 % 10;
    if (Math.pow(baiw, 3) + Math.pow(shiw, 3) + Math.pow(gew, 3) === uuu) {
        return true
    }
}
// let cs = c(371);
// console.log(cs, ">>>")

class navArray extends arrays {
    constructor() {
        super()
    }

    selectSort() { //选择排序
        let arr = this.object;
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; //更新最小值下标
                }
            }
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        console.log(arr)
    }

    insertSort() { //插入排序
        let arr = this.object;
        for (let i = 1; i < arr.length; i++) {
            let inserted = arr[i]
            let j = i - 1
            for (;j>=0&&arr[j]>inserted;j--) {
                arr[j+1]=arr[j]
            }
            arr[j+1] = inserted
        }
    }

    bubbling() { //冒泡排序
        let arr = this.object;
        let temp = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        console.log(arr)
    }

    countSort() { //计数排序

    }

    mergerSort() { //归并排序
        
    }

}

let abc = new navArray();
// abc.selectSort();

// absence  不在 缺席
// absent   不在意的
// absolute 绝对的
// absorb   吸收
// abstract 理论上 抽象
// abuse    虐待 滥用
// academic 学院的，学术的
// academy  私立中学，专科院校
// accelerate 加速