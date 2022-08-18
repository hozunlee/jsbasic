// const keyPair2 = (arr, N) => {
//     for (let i = 0; i <= arr.length; i += 1) {
//         for (let j = 0; j <= arr.length - 1; j += 1) {
//             if (arr[i] + arr[j] === N) {
//                 return console.log([i, j]);
//             }
//         }
//     }
// };

const keyPair = (arr, N) => {
    for (let k of arr) {
        const i = arr.indexOf(N - k);
        if (i > -1) return console.log([arr.indexOf(k), i]);
    }
};

keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
keyPair([1, 2, 3, 4, 5], 3); // [3, 4]
keyPair([155, 232, 23, 14, 35], 190); // [3, 4]
return;
