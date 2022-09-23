import fetch from "node-fetch";

// #1
const myFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json()) // 여기까지 하는게 원칙
        .then(console.log)
        .catch((error) => console.error("err>>>", error)); // 여기서 catch를 안하는게 원칙이고
};

myFetch();

// # 1-1 좋은코드
const myFetch2 = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
    ); // 여기까지 하는게 원칙
    // 여기서 catch를 안하는게 원칙이고
};

myFetch()
    .then(console.log)
    .catch((error) => console.error("err>>>", error));

// // #2
// let result;

// promiseFn().then(res =>
//   result = res;
// );
// otherFunction(res);
