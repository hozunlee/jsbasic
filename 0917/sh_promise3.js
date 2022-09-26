const p = new myPromise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log("fulfill", now));
        else reject(new Error("어디로?"));
    }, 1000);
});

console.log("111>>", p);
p.then((res) => console.log(res));
p.catch((err) => console.log("이것이에러", err));
setTimeout(() => console.log("222>>", p), 2000);

function myPromise(cb) {
    myPromise.prototype.then = (tcb) => {
        myPromise.prototype.thenFn = tcb;
        return this;
    };

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

    if (new.target) this.state = "pending";
}
