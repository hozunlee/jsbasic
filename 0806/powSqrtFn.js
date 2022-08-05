arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {
    const pow = [];
    const sqrt = [];
    for (let k of arr) {
        pow.push(Math.pow(k, 2));
        sqrt.push(Math.sqrt(k));
    }
    return [pow, sqrt];
};

console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]

const powSqrtByForEach = (arr) => {
    const pow = [];
    const sqrt = [];
    arr.forEach((item) => {
        pow.push(Math.pow(item, 2));
        sqrt.push(Math.sqrt(item));
    });
    return [pow, sqrt];
};

console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]

const powSqrtByMap = (arr) => {
    const pow = arr.map((item) => Math.pow(item, 2));
    const sqrt = arr.map(Math.sqrt);

    return [pow, sqrt];
};

// map 하나로 2개의 return을받을 수 있을까
// const powSqrtByMap1 = (arr) => {
//     const pow = arr.map((item) => Math.pow(item, 2));
//     const sqrt = arr.map(Math.sqrt);

//     return [pow, sqrt];
// };

console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
