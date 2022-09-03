// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (arr1, arr2) => {
    const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
    return new Set(a.filter((x) => b.includes(x)));
};
const diff = (arr1, arr2) => new Set(arr1.filter((x) => !arr2.includes(x)));

const union = (arr1, arr2) => new Set([...arr1, ...arr2]);

console.log("intersect(A, B) :>> ", intersect(A, B)); // [1, 3, 5]
console.log("intersect(A, C) :>> ", intersect(A, C)); // [3, 4]
console.log("diff(A, B) :>> ", diff(A, B)); // [2, 4]
console.log("diff(B, A) :>> ", diff(B, A)); //[22, 44];
console.log("diff(A, C) :>> ", diff(A, C)); // [1, 2, 5]
console.log("diff(B, C) :>> ", diff(B, C)); // [1, 22, 44, 5]
console.log("union(A, B) :>> ", union(A, B)); // [1, 2, 3, 4, 5, 22, 44]
console.log("union(A, C) :>> ", union(A, C)); // [1, 2, 3, 4, 5, 11, 222, 555]

return;

// 성호님코드
