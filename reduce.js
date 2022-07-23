// const sumOne = () => {
//     let sum = 0;
//     for (let i of [1, 2, 3]) {
//         sum += i;
//     }
//     return console.log(sum);
// };

// sumOne();

// 1

// TODO 블로그 쓰기
const reduce = (arr, cb, init) => {
    let i = 0;
    // let sum = init ?? arr[i++];
    let sum = init ?? ((i += 1), arr[0]);
    //FIXME 쉼표괄호 연산자
    // 널병합연산자

    // console.log(sum);
    //if(!init) {
    // sum = arr[0]
    // i +=1;
    // } // 실무에서 기본적으로 쓰는 것
    for (; i < arr.length; i += 1) {
        sum = cb(sum, arr[i]);
        // console.log(sum);
    }
    return sum, console.log("reduce", sum); //6
};

reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0); // 15면 통과!

const reduce1 = (arr, cb, init) => {
    let i = init || init === "" ? 0 : 1;
    // let curr = init ?? arr[0];
    let curr = init || init === "" ? init : arr[0];

    for (; i < arr.length; i += 1) {
        curr = cb(curr, arr[i]);
        // console.log(sum);
    }
    return curr, console.log("reduce1", curr); //6
};
reduce1([1, 2, 3, 4, 5], (a, b) => a + b, undefined); // 15면 통과!
reduce1([1, 2, 3, 4, 5], (a, b) => a + b, null); // 15면 통과!
reduce1([1, 2, 3, 4, 5], (a, b) => a + b, 0); // 15면 통과!

reduce([1, 2, 3], (a, b) => a + b, 0); //6

reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce1([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
console.log(
    "리듀서",
    [3, 3, 3].reduce((a, b) => a * b, 0)
);
// 2

// const reduce2 = (arr, cb) => {
//     let sum = 0;
//     for (let i of arr) {
//         sum = cb(sum, i);
//         // console.log("reduce2", sum);
//     }
//     return sum, console.log("reduce2", sum); //15
// };

// reduce2([1, 2, 3, 4, 5], (a, b) => a + b); //15

// // 3

// const reduce3 = (arr, cb, init) => {
//     let mul = init;
//     for (let i of arr) {
//         mul = cb(mul, i);
//         // console.log(mul);
//     }
//     return mul, console.log("reduce3", mul); //120
// };

// reduce3([1, 2, 3, 4, 5], (a, b) => a * b, 1);

// // 4

// const reduce4 = (arr, cb) => {
//     let mul = 1;
//     for (let i of arr) {
//         mul = cb(mul, i);
//     }
//     return mul, console.log("reduce4", mul); //120
// };

// reduce4([2, 2, 2], (a, b) => a * b);

console.log("----------------샘플");
