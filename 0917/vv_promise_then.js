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
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;

    HjPromise.prototype.then = (tcb) => {
        HjPromise.prototype.thenFn = tcb;
        return new Promise((resolve, reject) => {
            if (this.state === "<pending>") {
                this.onFulfilledCallback = () => {
                    const result = this.thenFn(this.value);
                    resolve(result);
                };
            }
            if (this.state === "<fulfilled>") {
                HjPromise.prototype.thenFn = tcb;
            } else if (HjPromise.prototype.finallyFn) {
                resolve(this.finallyFn());
            }
        });
    };

    HjPromise.prototype.then1 = (tcb) => {
        HjPromise.prototype.thenFn = tcb;

        return this;
    };

    HjPromise.prototype.catch = (ccb) => {
        HjPromise.prototype.catchFn = ccb;
        return this;
    };

    HjPromise.prototype.finally = (fcb) => {
        HjPromise.prototype.finallyFn = fcb;
        return this;
    };

    // callback을 위한 메서드 생성
    const resolve = (res) => {
        console.log("성공===>", res);
        this.state = "<fulfilled>";
        this.value = res;
        if (this.onFulfilledCallback !== null) {
            this.onFulfilledCallback(res);
        }
        if (HjPromise.prototype.finallyFn) {
            this.finallyFn();
        }
    };

    const reject = (error) => {
        console.log("실패===>", error);
        this.state = "<reject>";
        this.catchFn(error);

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

console.log("ppppppppp>>>>>", p);
p.then((res) => {
    console.log("p.then.res11>>>", res);
    return randTime(1);
})
    .then((res) => {
        console.log("p.then.res22>>>", res);
        return "FiNALLY";
    })
    .then((res) => {
        console.log("res333", res);
    })
    .then(console.log("p.then.res33!!!"))
    .finally(() => console.log("finally-11"))
    .finally(() => console.log("finally-22"));
// .catch((err) => console.error("err-11>>", err));
// .catch((err) => console.error("err-22>>", err))
// .then((res) => res || "TTT")
