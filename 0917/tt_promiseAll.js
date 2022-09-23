import { assertArray } from "../utils/test-utils.js";

const randTime = (val) =>
    new Promise((resolve) => {
        const delay = Math.random() * 1000;
        console.log("randtime :>> ", val, delay);
        setTimeout(resolve, delay, val);
    });

// //
// const promiseAll = (arr) => {
//     //error 체크
//     if (!arr.length) return Promise.reject("No");
//     const resArr = [];
//     return new Promise((resolve, reject) => {
//         let pending = 0; // 변하는 변수값이면 ing를 준다.
//         for (const k of arr) {
//             let key = arr.indexOf(k);
//             k.then((res) => {
//                 resArr[key] = res;
//                 pending += 1;
//                 // resArr.push(res);

//                 if (pending === arr.length) {
//                     //if (arr.length === resArr) 로 비교했더니 empty
//                     //TODO index 2가 들어오면 0 1 이 그냥 empty로 출력됨! 수정필요

//                     resolve(resArr);
//                 }
//                 // resArr.push(res);
//             }).catch(reject);
//         }
//     });
// };

const promiseAll = (arr) => {
    const resArr = [];
    let pending = 0;
    return new Promise((resolve, reject) => {
        const newArr = arr.map((item, idx) => item.then((res) => res));
        console.log(
            "🚀 ~ file: tt_promiseAll.js ~ line 41 ~ returnnewPromise ~ newArr",
            newArr
        );
        newArr.then((res) => resolve(res));
        // .catch((error) => reject(error));
    });
};

// async / await
// const promiseAll = async (arr) => {
//     try {
//         const resArr = [];

//         for (const k of arr) {
//             // const res = await k;
//             resArr.push(await k);
//         }

//         return resArr;
//     } catch (error) {
//         console.error(err);
//     }
// };

const vals = [1, 2, 3];
// console.table(vals);

promiseAll([randTime(1), randTime(2), randTime(3)]).then((arr) => {
    console.table(arr);
    assertArray(arr, vals);
});

//

// promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)]) //
//     .then((array) => {
//         console.log("여긴 과연 호출될까?!");
//     })
//     .catch((error) => {
//         console.log("reject!!!!!!>>", error);
//     });
