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
        if (typeof tcb === "function") {
            thenCallBackArr.push(tcb);

            // myPromise.prototype.thenFn = thenCallBackArr.shift();
        }

        // console.log("this.state :>> ", this.state);
        // if (typeof tcb === "function") myPromise.prototype.thenFn = tcb;
        // console.log("object :>> ", thenCallBackArr); // array 담기는 것 확인
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

    myPromise.prototype.finally = (fcb) => {
        myPromise.prototype.finallyFn = fcb;
    };

    const resolve = (succ) => {
        console.log("RESOLVE!!👍🏽", succ);
        this.state = "resolve";
        value = succ;

        thenCallBackArr.forEach((cb) => {
            myPromise.prototype.thenFn = cb;
            if (value instanceof Promise) {
                console.log("여기서 프로미스 다시 처리");
                value.then((res) => (value = this.thenFn(res)));
                // const temp = new myPromise((resolve) => {
                //     return resolve(value);
                // });
                // console.log("temp :>> ", temp);
                // value = this.thenFn(value);
            } else {
                value = this.thenFn(value);
            }
        });
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
    .then((res) => {
        console.log("p.then.res22>>>", res);
        return "FiNALLY";
    })
    .then(console.log("p.then.res33!!!"));

// .catch((err) => console.error("err-11>>", err))
// .catch((err) => console.error("err-22>>", err))
// .then((res) => res || "TTT")
// .finally(() => console.log("finally-11"))
// .finally(() => console.log("finally-22"));
