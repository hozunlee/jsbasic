const reduce = (arr, cb, init) => {
    let i = 0;
    let res = init ?? ((i += 1), arr[0]);

    console.log(i, res);

    for (; i < arr.length; i += 1) {
        res = cb(res, arr[i]);
    }
    return res, console.log(res);
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
