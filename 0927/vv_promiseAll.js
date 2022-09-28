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
    // for (let i = 0; i < promises.length; i += 1) {
    //     results[i] = await promises[i](i + 1);
    // }
    const res = promises.map((item, idx) => item(idx + 1));
    for await (const k of res) results.push(k);

    return results;
};

console.time("async-promiseAll");
const pfns = [afterTime, afterTime, afterTime];
const rets = await promiseAll(pfns);
console.log("rets>>>", rets);
console.timeEnd("async-promiseAll");
