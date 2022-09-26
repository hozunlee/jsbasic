// setTimeout(function () {
//     console.log("depth1", new Date());
//     setTimeout(function () {
//         console.log("depth2", new Date());
//         setTimeout(function () {
//             console.log("depth3", new Date());
//             throw new Error("Already 3-depth!!");
//         }, 3000);
//     }, 2000);
// }, 1000);

// console.log("START!", new Date());

// const timeOut = (depth, delay) => {
//     setTimeout(() => {
//         console.log(`depth${depth}`, new Date());
//     }, delay);
// };

// const promiseFn = (depth = 1, delay = 1000) => {
//     new Promise((resolve, reject) => {
//         timeOut(depth, delay);
//         if (depth < 3) resolve(depth + 1);
//         else reject(new Error("어디로?" + depth));
//     })
//         .then((res) => {
//             promiseFn(res);
//         })
//         // .then((res) => {
//         //     console.log(res);
//         //     timeOut(res, 3000);
//         // })
//         .catch((err) => console.log("Error!!>>", err));
// };
// console.log("START!", new Date());

// promiseFn();

// TODO
// let depth = 1;
// const delay = (ms) => {
//     return new Promise((resolve) =>
//         setTimeout(() => {
//             console.log(`depth${depth++}`, new Date());
//             if (depth <= 3) resolve(ms + 1000);
//             else reject("Already 3-depth!!");
//         }, ms)
//     );
// };
// const result = delay(1000);
// result
//     .then((res) => delay(res))
//     .then((res) => delay(res))
//     .then((res) => delay(res));

// TODO
const arr = [];
const randTime = (val) => {
    return new Promise((resolve) => {
        const num = Math.random() * 1000;
        console.log("val num :>> ", val, num);
        arr.push(num);
        resolve(val);
    });
};

[1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));

/*
//FIXME
function MyPromise(cb) {
    this.state = "pending";

    const resolve = (res) => {
        console.log("RESOLVE>>", res);
        this.state = "resolve";
    };

    const reject = (error) => {
        console.log("REJECT>>", error);
        this.state = "reject";
    };
    cb(resolve, reject);

    return this.state;
}

const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log("fulfill", now));
        else reject(new Error("어디로?"));
    }, 1000);
});

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);
*/
