const reduce = (arr, cb, init) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        sum = cb(sum, arr[i]);
    }
    return sum, console.log(sum);
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
// reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
// reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
