const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log("fulfill", now));
        else reject(new Error("어디로?"));
    }, 1000);
});

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);

function Promise(cb) {
    const resolve = () => {
        console.log("RESOLVE!!👍🏽");
        this.state = "resolve";
    };

    const reject = () => {
        console.log("REJECT!!👎🏽");
        this.state = "reject";
    };

    cb(resolve, reject);

    if (new.target) this.state = "pending";
}
