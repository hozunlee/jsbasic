// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log("doing something...");
    setTimeout(() => {
        console.log("done, success");
        // resolve("hojun");
        reject(new Error("no network"));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    }) // promise를 반환하기 때문에 catch에 담을 수 있음
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("어쨌든 끝남"));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        });
    })
    .then((num) => console.log(num));

// 4. 오류 처리
