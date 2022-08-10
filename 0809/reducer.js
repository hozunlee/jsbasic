// 다음과 같은 정수 배열이 주어졌을 때, 각 요소를 다음의 순서로 처리하시오.
//  → 배열의 각 요소를 제곱
//  → 배열 각 요소의 제곱근
//  → 배열의 각 요소를 세제곱
const arr = [1, 2, 3, 4, 5];
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

// callback 함수 만들기
const calc = (arr, cb) => {
    console.log("🚀 ~ file: reducer.js ~ line 10 ~ calc ~ arr", arr);
    console.log("🚀 ~ file: reducer.js ~ line 10 ~ calc ~ cb", cb);
    const result = [];
    for (let a of arr) {
        result.push(cb(a));
    }
    return result;
};

const result = arr.reduce((acc, cur) => {
    acc.push(Math.sqrt(cur ** 2) ** 3);
    return acc;
}, []);

// console.log("🚀 ~ file: reducer.js ~ line 27 ~ result ~ result", result);

//TODO  성호님 코드 복습 또 복습

const pow = (a) => a ** 2;
const pow3 = (a) => a ** 3;

// calc 콜백 함수를 사용하여 해결
const ax = [pow, Math.sqrt, pow3].reduce((ret, fn) => calc(ret, fn), arr);
console.log("🚀 ~ file: reducer.js ~ line 32 ~ ax", ax);

// map을 사용하여 해결
// const ax2 = [pow, Math.sqrt, pow3].reduce(
//     (ret, fn) => ret.map((a) => fn(a)),
//     arr
// );
// console.log("🚀 ~ file: reducer.js ~ line 29 ~ ax2", ax2);
