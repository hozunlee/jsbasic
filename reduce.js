// const sumOne = () => {
//     let sum = 0;
//     for (let i of [1, 2, 3]) {
//         sum += i;
//     }
//     return console.log(sum);
// };

// sumOne();

// 1

const reduce1 = (arr, cb, init) => {
    let sum = init;
    for (let i of arr) {
        sum = cb(sum, i);
        // console.log(sum);
    }
    return sum, console.log("reduce1", sum); //6
};

reduce1([1, 2, 3], (a, b) => a + b, 0); //6

// 2

const reduce2 = (arr, cb) => {
    let sum = 0;
    for (let i of arr) {
        sum = cb(sum, i);
        // console.log("reduce2", sum);
    }
    return sum, console.log("reduce2", sum); //15
};

reduce2([1, 2, 3, 4, 5], (a, b) => a + b); //15

// 3

const reduce3 = (arr, cb, init) => {
    let mul = init;
    for (let i of arr) {
        mul = cb(mul, i);
        // console.log(mul);
    }
    return mul, console.log("reduce3", mul); //120
};

reduce3([1, 2, 3, 4, 5], (a, b) => a * b, 1);

// 4

const reduce4 = (arr, cb) => {
    let mul = 1;
    for (let i of arr) {
        mul = cb(mul, i);
    }
    return mul, console.log("reduce4", mul); //120
};

reduce4([2, 2, 2], (a, b) => a * b);
