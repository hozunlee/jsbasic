//ex2) 비순수 함수
const a11 = [1, 2, 3, 4, 5];

// const reverseArray = (arr) => {
//     const arrLength = arr.length - 1;

//     for (let i = arrLength; i >= 0; i -= 1) {
//         arr[arr.length] = arr[i];
//         // for 루프일때 arr의 length를 가변적으로 건드리는건 안좋음!
//         // delete arr[i];
//         arr.splice(i, 1);
//         // for 루프를 돌다가 지우는건 안좋음!
//     }

//     return arr;
// };

const reverseArray = (arr) => {
    const maxIdx = arr.length - 1;

    for (let i = 0; i <= parseInt(arr.length / 2); i += 1) {
        //# 1 temp 변수활용
        // const temp = arr[i];
        // arr[i] = arr[maxIdx - i];
        // arr[maxIdx - i] = temp;

        //# 2 구조 분해 할당
        [arr[arr.length - 1 - i], arr[i]] = [arr[i], arr[arr.length - 1 - i]];
    }

    return arr;
};

// ● 구조 분해 할당 사용
// 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다.
// 구조 분해 할당을 사용하면 다음과 같은 방법으로 간단하게 swap이 가능하다.
// 출처 https://miiingo.tistory.com/364

// [5, 4, 3, 2, 1] 반환, a11도 이 값으로 변경됨!

console.log("reverseArray(a11) :>> ", reverseArray(a11));
console.log("🚀 a11", a11);
