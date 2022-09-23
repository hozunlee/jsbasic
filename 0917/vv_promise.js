// 앞에서 작성한 다음 코드를 Promise를 이용하여 refactoring 하시오.

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

const iPromise = (depth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (depth >= 3) reject(new Error("Already 3-depth!!"));
            console.log(`depth${depth}`, new Date());
            resolve(depth + 1);
        }, depth * 1000);
    });
};

iPromise(1).then(iPromise).then(iPromise).then(iPromise);

console.log("START!", new Date());
