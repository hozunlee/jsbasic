//다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

const arr = [1, 2, 3, 4];

const push = (arr, num1, num2) => {
    const newArr = [...arr, num1, num2];
    return newArr;
};

console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]

const pop = (arr, number) => {
    const range = number ?? 1;
    const newArr = [];
    for (let i = 0; i < arr.length - range; i += 1) {
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(pop(arr)); // [1, 2, 3, 4, 5] // [1, 2, 3]
console.log(pop(arr, 2)); // 2개 팝! ⇒ [1, 2, 3] // [1, 2]
console.log(arr); // [1, 2, 3, 4]
return;
console.log(unshift(arr, 0)); // [0, 1, 2]
console.log(unshift(arr, 7, 8)); // [7, 8, 0, 1, 2]
console.log(shift(arr)); // [8, 0, 1, 2]
console.log(shift(arr, 2)); // [1, 2]
