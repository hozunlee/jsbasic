const randTime = (val) =>
    new Promise((resolve) => {
        const delay = Math.random() * 1000;
        // console.log("randtime :>> ", val, delay);
        setTimeout(resolve, delay, val);
    });

const p = new myPromise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        // if (now % 2 === 0)
        resolve(now);
        // else reject(new Error("어디로?"));
    }, 1000);
});

function myPromise(cb) {
    let value;

    const thenCallBackArr = [];
    myPromise.prototype.then = (tcb) => {
        if (typeof tcb === "function") thenCallBackArr.push(tcb);
        // if (typeof tcb === "function") myPromise.prototype.thenFn = tcb;
        console.log("object :>> ", thenCallBackArr);
        return this;
    };

    //     (res) => {
    //   console.log("p.then.res11>>>", res);
    //   return randTime(1);
    // }

    myPromise.prototype.catch = (ccb) => {
        myPromise.prototype.catchFn = ccb;
        return this;
    };

    const resolve = (succ) => {
        console.log("RESOLVE!!👍🏽", succ);
        this.state = "resolve";
        this.thenFn(succ);
    };

    const reject = (error) => {
        console.log("REJECT!!👎🏽", error);
        this.state = "reject";
        this.catchFn(error);
    };

    cb(resolve, reject);

    if (new.target) {
        this.runtime = new Date();
        this.state = "pending";
    }
}

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);

p.then((res) => {
    console.log("p.then.res11>>>", res);
    return randTime(1);
})
    .then((res) => console.log(res))
    .then(console.log("p.then.res33!!!"));
// .then((res) => {
//     console.log("p.then.res22>>>", res);
//     return "FiNALLY";
// })
// .catch((err) => console.error("err-11>>", err))
// .catch((err) => console.error("err-22>>", err))
// .then((res) => res || "TTT")
// .finally(() => console.log("finally-11"))
// .finally(() => console.log("finally-22"));
