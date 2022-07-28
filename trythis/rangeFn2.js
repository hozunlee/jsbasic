// const range = (startN, endN, stepN) => {
//     const res = [];

//     const step = stepN ?? (!endN || startN < endN ? 1 : -1);
//     let start = startN;
//     const end = endN ?? ((start = 1), startN);

//     for (let i = start; start < end ? i <= end : i >= end; i += step) {
//         res.push(i);
//     }

//     return res, console.log(res);
// };

const range1 = (startN, endN, stepN) => {
    const res = [];

    // const step = stepN ?? stepN === 0 ? 1 : !endN || startN < endN ? 1 : -1;
    const step = stepN ?? (!endN || startN < endN ? 1 : -1);
    let start = startN;
    const end =
        endN ??
        (0 < startN ? ((start = 1), startN) : startN === 0 ? startN : -1);

    if (start === end) {
        return startN, console.log([startN]);
    } else if ((startN > endN && stepN > 0) || (startN < endN && stepN < 0)) {
        return console.log([]);
    }
    for (let i = start; start < end ? i <= end : i >= end; i += step) {
        res.push(i);
    }

    return res, console.log(res);
};

// range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(1, 10, 2); // [1, 3, 5, 7, 9]
// range(1, 10, 3); // [1, 4, 7, 10]
// range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -2); // [10, 8, 6, 4, 2]
// range(5); // [1, 2, 3, 4, 5]
// range(100); // [1, 2, 3, 4, 5, …, 99, 100]
// range(5, 5); // [5]

range1(-5); // [-5, -4, -3, -2, -1]
range1(5, 5); // [5]
range1(5, 5, 0); // [5]
range1(5, 5, -1); // [5]
range1(1, 5, 6); // [1]
range1(0, 5); // [0, 1, 2, 3, 4, 5]
range1(0, -1); // [0, -1]
range1(0, -3); //
range1(-3, 0);
range1(0, 0);

range1(0);
range1(5, 1, 1); // []
range1(1, 5, -1); // []
range1(0, -1, -5); // [0]
