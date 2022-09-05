// splice 함수를 순수 함수로 구현하시오.
const arr = [1, 2, 3, 4, 5];

const splice = (arr, idx, delCnt = arr.length - 1, ...add) => {
    // const resArr = [[...arr].slice(start, end), ...add];
    // return resArr;
    // console.log(add);

    // const isDeleteRange = (x) => x < idx || x > delCnt;
    const res = [...arr.slice(0, idx), ...arr.slice(idx + delCnt)];
    const a = [res, add].flat().sort();

    return a;
};

const a1 = splice(arr, 1, 3); // a1 = [1, 5]
const a2 = splice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
console.log("🚀 ~ file: spliceFn.js ~ line 12 ~ a1", a1);
console.log("🚀 ~ file: spliceFn.js ~ line 17 ~ a2", a2);
const a3 = splice(a2, 2); // a3 = [1, 2]
console.log("🚀 ~ file: spliceFn.js ~ line 21 ~ a3", a3);
const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
console.log("🚀 ~ file: spliceFn.js ~ line 23 ~ a4", a4);
const a5 = splice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
console.log("🚀 ~ file: spliceFn.js ~ line 25 ~ a5", a5);

// TODO  성호님 코드 복습 또 복습

// arr = 받은 배열 , idx = 지울 idx, delCnt = 지울 범위, ...add = 추가할 숫자
const splice2 = (arr, idx, delCnt = arr.length - 1, ...add) => [
    ...arr.slice(0, idx),
    ...add,
    ...arr.slice(idx + delCnt),
];

const a11 = splice2([1, 2, 3, 4, 5], 1, 3); // a1 = [1, 5]
console.log("a11 :>> ", a11);
