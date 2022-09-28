const afterTime = (sec) => {
    console.log("afterTime>>", sec);
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error("Not valid sec range!!"));
    return new Promise((resolve) =>
        setTimeout(resolve, sec * 1000, `${sec}초`)
    );
};

const promiseAll = async (promises) => {
    const results = [];
    const rs = promises.map((p, i) => p(i + 1));
    for await (const k of rs) {
        results.push(k);
    }

    return results;
};

console.time("async-promiseAll");
const pfns = [afterTime, afterTime, afterTime];
const rets = await promiseAll(pfns);
console.log("rets>>>", rets);
console.timeEnd("async-promiseAll");
