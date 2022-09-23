import fetch from "node-fetch";

const afterTime = (sec) => {
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error("Not valid sec range!!"));
    return new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
};

// 다음 코드를 generator함수를 이용하여 실행하는 코드를 작성하시오.
const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";

// fetch(sampleUrl)
//     .then((res) => res.json())
//     .then((user) => console.log(user.name));

function* fetch1(url) {
    const res = yield fetch(url);
    const json = yield res.json();
    return console.log(json.name);
}

// const pa = fetch1(sampleUrl);
// console.log("🚀 ~ file: gener.js ~ line 17 ~ pa", pa);
// const n1 = pa.next();

// n1.value.then((res) => {
//     console.log(res);
//     const n2 = pa.next(res);
//     n2.value.then((res2) => {
//         const userName = pa.next(res2);
//         console.log(
//             "🚀 ~ file: gener.js ~ line 25 ~ n1.value.then ~ userName",
//             userName
//         );
//     });
// });

// const n1 = pa.next();
// n1.value
//     .then((res) => {
//         const n2 = pa.next(res);
//         console.log("res>>>>>", n1.next);
//     })
//     .catch(console.error);

// # Co 사용
function* fetch2(url, from) {
    const res = yield fetch(url);
    const json = yield res.json();
    return console.log(from, json.name);
}

import co from "co";
co(fetch2, "https://jsonplaceholder.typicode.com/users/1", "co");

// useEffect(async () => {
//     //여기에 async를 쓰게 되면 함수전체가 프로미스를 반환하게 됨
//     efkldkfj(
//         //
//         async () => {}
//     )(); // 즉시실행 해당함수만 promise가 됨
// });

const arr = [afterTime(1), afterTime(2)];
for await (const fao of arr.values()) {
    console.log("fao=", fao);
}
