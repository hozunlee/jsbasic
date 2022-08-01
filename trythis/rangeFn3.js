const range = (...args) => {
    const [start, end, step] = args;

    res = [];
    for (let i = start; i <= end; i += step) {
        res.push(i);
    }

    return res, console.log(res);
};

range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(1, 10, 2); // [1, 3, 5, 7, 9]
return;
range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, …, 99, 100]
range(-5); // [-5, -4, -3, -2, -1]
range(5, 5); // [5]
range(5, 5, 0); // [5]
range(0, 5); // [0, 1, 2, 3, 4, 5]
range(5, 5, -1); // [5]
range(0, -1); // [0, -1]
range(5, 1, 1); // []
range(0, -3); // [0, -1, -2, -3]
range(1, 5, -1); // []
range(-3, 0); // [-3, -2, -1, 0]
range(1, 5, 6); // [1]
range(0); // [0]
range(0, 0); // [0]
range(0, 0, 5); // [0]
range(2, 1, -5); // [2]
range(0, -1, -5); // [0]
