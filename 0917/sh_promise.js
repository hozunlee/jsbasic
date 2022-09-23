// // 앞에서 작성한 다음 코드를 Promise를 이용하여 refactoring 하시오.
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

const depthTime = (depth) =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`depth${depth}`, new Date());
            if (depth > 3) return reject(new Error("3 -depth!!"));
            resolve(depth + 1);
        }, depth * 1000);
    });

depthTime(1).then(depthTime).then(depthTime).then(depthTime).then(depthTime);
console.log("start", new Date());
