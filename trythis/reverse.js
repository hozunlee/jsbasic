// 순수함수
const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = (input) => {
    arr = [...input];
    arrLength = arr.length - 1;
    console.log(arr);
    console.log("arr.length :>> ", arrLength);

    res = [];

    for (let i = arrLength; i >= 0; i -= 1) {
        res.push(arr[i]);
    }
    return res;
};

// [5, 4, 3, 2, 1] 반환, a11은 변함 없음!!
console.log(
    "🚀 ~ file: reverse.js ~ line 20 ~ makeReverseArray",
    makeReverseArray(a11)
);
console.log("🚀 ~ file: 220802 reverse.js ~ line 3 ~ a11", a11);
