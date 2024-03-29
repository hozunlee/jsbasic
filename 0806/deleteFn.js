const { clearConfigCache } = require("prettier");

// 다음과 같은 deleteArray와 deleteObjectArray를 순수 함수로 작성하시오.
const arr = [1, 2, 3, 4];

const deleteArray = (arr, start, end) => {
    const checkArr = [...arr].slice(start, end);
    const newArr = arr.filter((item) => !checkArr.includes(item));

    return newArr;
};

// index 값으로 구분하는것
// const isValid  = index >= start || index < end

// const deleteArray1 = (arr, start, end = arr.length) => {
//     const isLeft = x => x >= start && x < end;
//     return arr.filter((_, i) => !isLeft(i))
// return arr.filter((_, i) => i < start || i >= end)

// const isDeleteRange = x => x < start || x >= end
// return arr.filter((_, i) => isDeleteRange(i))
// };

console.log("deleteArray(arr, 2) :>> ", deleteArray(arr, 2)); // [1, 2] // 인덱스 2부터  다 지워라
console.log("deleteArray(arr, 0, 1) :>> ", deleteArray(arr, 0, 1)); // [2, 3, 4] // 인덱스 0, 1까지  다 지워라
console.log("deleteArray(arr, 1, 3) :> ", deleteArray(arr, 1, 3)); // [1, 4] // 1부터 3미만 인덱스 삭제

console.log("arr==>>>>>>end");

const users = [
    { id: 1, name: "Hong" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Lee" },
];

const deleteObjectArray = (obj, idxKey, value) => {
    if (typeof idxKey === "number") {
        const res = obj.filter((_, idx) => idx !== idxKey);
        return res;
    } else {
        const delTarget = obj.find((item) => item[idxKey] === value);
        const newArr = obj.filter((item) => item !== delTarget);
        return newArr;
        return arr.filter((obj) => obj[idxKey] !== value);

        const isDeleteByIndex = typeof idxKey === "number";
        return arr.filter((obj, i) =>
            isDeleteByIndex ? i !== idxKey : obj[idxKey] !== value
        );
    }
};

console.log("deleteObjectArray(users, 2) :>> ", deleteObjectArray(users, 2)); // Hong, Kim // 인덱스 2인 놈을 지워라
console.log(
    'deleteObjectArray(users, "id", 2) :>> ',
    deleteObjectArray(users, "id", 2)
); // Hong, Lee // user id가 2인놈을 지워라
console.log(
    'deleteObjectArray(users, "name", "Lee") :>> ',
    deleteObjectArray(users, "name", "Lee")
); // Hong, Kim // name이 Lee인놈을 지워라

console.log("obj=>>>>>>> end");

// = (!value && value !== 0) ? keyOrValue : onerror.findIndex(obj => obj[keyOrIndex] === value)
