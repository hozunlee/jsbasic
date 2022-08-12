// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)함수를 작성하시오.
// const keyPair = (arr, n) => {
//     for (let k in arr) {
//         for (let j = 0; j <= arr.length; j += 1) {
//             if (arr[k] + arr[j] === n) {
//                 return [arr.indexOf(arr[k]), arr.indexOf(arr[j])];
//             }
//         }
//     }
// };

// console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
// console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
// console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]

const keyPair2 = (arr, n) => {
    // 누산값, 현재값, 현재 인덱스
    return arr.reduce((sum, cur, idx) => {
        let i = arr.indexOf(n - cur);

        //i 값이 arr에 존재하지 않거나 && 이미 앞에서 한 push를 다시 하지 않기 위해
        if (i > -1 && idx < i) sum.push(arr.indexOf(cur), arr.indexOf(arr[i]));
        return sum;
    }, []);
};

console.log(keyPair2([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair2([1, 2, 3, 4, 5], 9)); // [3, 4]

const keyPair3 = (arr, n) => {
    //n = 9
    // index : 0, 1, 2, 3, 4
    // value : 1, 2, 3, 4, 5
    // diff : 8, 7, 6, 5, 4 // 필요한 값
    // diffI : {8:0, 7:1, 6:2, 5:3, 4:4}

    const diffIdx = {};

    for (let i = 0; i < arr.length; i += 1) {
        const val = arr[i];
        const diff = n - val;
        // if ( diffIdx[val] !== undefined){
        // if ( diffIdx[val] || diffIdx[val] === 0){
        if (diffIdx.hasOwnProperty(val)) {
            return [diffIdx[val], i];
        } else {
            diffIdx[diff] = i;
        }
    }
};

console.log(keyPair3([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair2([1, 2, 3, 4, 5], 9)); // [3, 4]
return;
