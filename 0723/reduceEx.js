const reduceEx = (arr, f, initValue) => {
    if (!Array.isArray(arr)) return initValue;
    let i = 0;
    // let ret = initValue
    // let ret = initValue !== undefined ? initValue : arr[0];
    // if (!initValue && initValue !== '') {
    //     ret = arr[0];
    //     i += 1;
    // } // 아래처럼 쓰고 싶지 않다면 위에 과정을 겪어야한다.
    let ret = initValue ?? ((i += 1), arr[0]);
    // 쉼표괄호 연산자 c = (a++, b++) a++를실행하고 b++을 실행함 그리고 b값을 c에 넣어줌

    for (; i < arr.length; i += 1) {
        ret = f(ret, arr[i]);
    }
    return ret;
};

//TDD TEST 코드
const assertReduce = (arr, f, initValue, expVal) => {
    const myReduce = reduceEx(arr, f, initValue);
    console.log(
        arr,
        `${f}, ${initValue} ==> ${myReduce}: ${myReduce === expVal && "통과"}`
    );
};

console.log(reduceEx([1, 2, 3], (a, b) => a + b, 0));
console.log(reduceEx([3, 3, 3], (a, b) => a * b, 0)); // 0이면 통과!);

assertReduce([1, 2, 3], (a, b) => a * b, 0, 0);
