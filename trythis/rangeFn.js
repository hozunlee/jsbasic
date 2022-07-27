const range = (firstN, endN, r) => {
    let i = firstN;
    let range = r ?? 1;
    let res = [];

    if (firstN < endN) {
        for (; i <= endN; i += range) {
            res.push(i);
        }
    } else if (firstN > endN) {
        range = r ?? -1;
        for (; i >= endN; i += range) {
            res.push(i);
        }
    } else if (!endN) {
        for (let i = 1; i <= firstN; i += 1) {
            res.push(i);
        }
    }
    return res, console.log(res);
};

range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(1, 10, 2); // [1, 3, 5, 7, 9]
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, …, 99, 100]
return;
