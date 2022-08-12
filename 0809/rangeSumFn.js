// 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (start, end) => {
    return arr.slice(start, end + 1).reduce((s, a) => (s += a), 0);
};

// console.log(rangeSum(2, 5)); // 19
// console.log(rangeSum(3, 5)); // 15
// console.log(rangeSum(1, 4)); // 14
// console.log(rangeSum(5, 8)); // 30
// console.log(rangeSum(6, 8)); // 22
// console.log(rangeSum(2, 8)); // 41
// console.log(rangeSum(4, 4)); // 5

const sums = [];
for (let i = 0; i < arr.length; i += 1) {
    sums[i] = (i === 0 ? 0 : sums[i - 1]) + arr[i];
}
console.log("sum :>> ", sums);

const rangeSum2 = (start, end) => {
    console.log(start, end, "==>", sums[end] - sums[start - 1]);
};
