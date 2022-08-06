arr = [1, 4, 9];

// callback 함수 만들기
const calc = (arr, cb) => {
    const result = []
    for ( let a of arr){
        result.push(cb(a))
    }
}

const powSqrtByForOf = (arr) => {
    // const arrPow = calc(arr, a => a** 2); // calc callback 함수 사용
    // const arrSqrt = calc(arr, Math.sqrt) // calc callback 함수 사용
    const arrPow = [];
    const arrSqrt = [];
    for (let k of arr) {
        // arrPow.push(Math.pow(k, 2));
        arrPow.push(a ** 2);
        arrSqrt.push(Math.sqrt(k));
    }
    return [arrPow, arrSqrt];
};

console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]

const powSqrtByForEach = (arr) => {
    const pow = [];
    // const pow =Array(arr.length).fill(0) // dense array을 만들기 위해 먼저 생성함
    const sqrt = [];

    arr.forEach((item, idx) => {
        pow.push(Math.pow(item, 2));
        sqrt.push(Math.sqrt(item));
        // pow[idx] = Math.pow(item, 2)
        // sqrt[idx] = Math.sqrt(item)
    });
    return [pow, sqrt];
};

console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]

const powSqrtByMap = (arr) => {
    const pow = arr.map((item) => a ** 2));
    const sqrt = arr.map(Math.sqrt);

    return [pow, sqrt];
    // return [[...arr.map(a => a** 2)], [...arr.map(Math.sqrt)]]; // 성호님 답
};

// map 하나로 2개의 return을받을 수 있을까
// const powSqrtByMap1 = (arr) => {
//     const pow = arr.map((item) => Math.pow(item, 2));
//     const sqrt = arr.map(Math.sqrt);

//     return [pow, sqrt];
// };

console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
