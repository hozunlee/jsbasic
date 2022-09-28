const randTime = (val) =>
    new Promise((resolve) => {
        const delay = Math.random() * 1000;
        setTimeout(resolve, delay, val);
        resolve(val);
    });

const p = new HjPromise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(now);
        else reject(new Error("어디로?"));
    }, 1000);
});

//생성자 함수
function HjPromise(cb) {
    let onFulfilledCallback = null;
    let value;

    HjPromise.prototype.then = (tcb) => {
        HjPromise.prototype.thenFn = tcb;
        return new Hj   Promise((resolve) => {
            onFulfilledCallback = () => {
                const result = this.thenFn(value);
                resolve(result);
            };
        });
    };

    HjPromise.prototype.catch = (ccb) => {
        HjPromise.prototype.catchFn = ccb;
        return new Promise((resolve) => {
            if (this.state === "<pending>") {
                onRejectedCallback = () => {
                    const result = this.catchFn(value);
                    resolve(result);
                };
            }
        });
    };

    HjPromise.prototype.finally = (fcb) => {
        HjPromise.prototype.finallyFn = fcb;
    };

    // callback을 위한 메서드 생성
    const resolve = (res) => {
        console.log("성공===>", res);
        this.state = "<fulfilled>";
        value = res;
        console.log("onFulfilledCallback :>> ", onFulfilledCallback);
        if (onFulfilledCallback !== null) {
            onFulfilledCallback(res);
        }
        if (HjPromise.prototype.finallyFn) {
            this.finallyFn();
        }
    };

    const reject = (error) => {
        console.log("실패===>", error);
        this.state = "<reject>";
        value = error;

        if (HjPromise.prototype.catchFn) {
            this.catchFn(error);
        }
        if (HjPromise.prototype.finallyFn) {
            this.finallyFn();
        }
    };

    cb(resolve, reject);
    if (new.target) {
        //this에 새로운 프로퍼티 추가
        this.runtime = new Date();
        this.state = "<pending>";
    }
}

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);

// p.catch((err) => console.error("err-11>>", err));
p.then((res) => {
    console.log("p.then.res11>>>", res);
    return randTime(1);
});

// .then((res) => {
//     console.log("p.then.res22>>>", res);
//     return "FiNALLY";
// });
// .then(console.log("p.then.res33!!!"));
//     .catch((err) => console.error("err-22>>", err))
//     .then((res) => console.log("마지막추가===>>>", res))
//     .then((res) => res || "TTT")
//     .finally(() => console.log("finally-11"))
//     .finally(() => console.log("finally-22"));
