// #1

// const range2 = (firstN, endN, r) => {
//     let i = firstN;
//     let res = [];
//     let end = endN ?? firstN;

//     if (firstN < endN) {
//         if (r < 0) return console.log("error Number range");
//         let rangeN = r ?? 1;
//         for (; i <= endN; i += rangeN) {
//             res.push(i);
//         }
//     } else if (firstN > endN) {
//         if (r > 0) return console.log("error Number range");
//         let rangeN = r ?? -1;
//         for (; i >= endN; i += rangeN) {
//             res.push(i);
//         }
//     } else if (!endN) {
//         for (let i = 1; i <= firstN; i += 1) {
//             res.push(i);
//         }
//     }
//     return res, console.log(res);
// };

// #2

const range = (startN, endN, stepN) => {
    const res = [];
    let start = startN;
    const end = endN ?? ((start = 1), startN);

    const step = stepN ?? (!endN || startN < endN ? 1 : -1);

    if (startN > endN) {
        for (; start >= end; start += step) {
            res.push(start);
        }
    } else {
        for (; start <= end; start += step) {
            res.push(start);
        }
    }

    return res;
};

// #3

// const range = (startN, endN, stepN) => {
//     res = [];
//     let i = startN;
//     const end = endN ?? ((i = 1), startN);
//     const j = i;
//     const step = stepN ?? (!endN || startN < endN ? 1 : -1);

//     console.log(i, end, step);

//     for (; j < end ? i <= end : i >= end; i += step) {
//         res.push(i);
//     }

//     return res, console.log(res);
// };

// range(1, 10, 2); // [1, 3, 5, 7, 9]
// range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(9, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.time("1st");
// range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(50);
// console.timeEnd("1st");
// console.time("2st");
// range1(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range1(50);
// console.timeEnd("2st");
// console.time("3st");
// range2(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range2(50);
// console.timeEnd("3st");
// range(10, 10); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(-5, 0); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
// range(5); // [1, 2, 3, 4, 5]

//TDD TEST 코드
const assertRange = (expVal, startN, endN, stepN) => {
    const myRange = range(startN, endN, stepN);
    console.log(myRange);

    for (let i = 0; i < myRange.length; i += 1) {
        if (myRange[i] !== expVal[i]) {
            return console.log("false");
        }
    }
    console.log("true");
};

assertRange([1, 2, 3, 4, 5], 5);
