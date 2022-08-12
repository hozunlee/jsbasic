// 순수함수
const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = (arr) => {
    const arrLength = arr.length - 1;

    res = [];
    for (let i = arrLength; i >= 0; i -= 1) {
        res.push(i);
    }
    return res;
};

console.log("🚀 makeReverseArray", makeReverseArray(a11));
// [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
console.log("🚀 a11", a11);
console.log("리버스 함수 활용", a11.reverse());
console.log("🚀 a11", a11);


const makeReverseArray1 = (arr) => arr.map((a, i) => arr[arr.length - 1 - i])

