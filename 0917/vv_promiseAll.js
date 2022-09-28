import { assertArray } from "../utils/test-utils.js";

const randTime = (val) =>
    new Promise((resolve) => {
        const delay = Math.random() * 1000;
        console.log("randtime :>> ", val, delay);
        setTimeout(resolve, delay, val);
    });

const promiseAll = (arr) => {
    const 리턴배열 = [];
    let pending = 0;
    return new Promise((resolve, reject) => {
        for (const item of arr) {
            const idx = arr.indexOf(item);
            item.then((res) => {
                리턴배열[idx] = res;
                pending += 1;
                if (pending === arr.length) {
                    resolve(리턴배열);
                }
            }).catch(reject);
        }
    });
};

const vals = [1, 2, 3];
// const randTime = val =>
// 	new Promise(resolve => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
    .then((arr) => {
        console.table(arr);
        assertArray(arr, vals);
    })
    .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
    .then((array) => {
        console.log("여긴 과연 호출될까?!");
    })
    .catch((error) => {
        console.log("reject!!!!!!>>", error);
    });
