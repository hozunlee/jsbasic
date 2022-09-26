// const p = new HjPromise((resolve, reject) => {
//     setTimeout(() => {
//         const now = Date.now();
//         if (now % 2 === 0) resolve(console.log("fulfill", now));
//         else reject(new Error("어디로?"));
//     }, 1000);
// });

// console.log("111>>", p);
// setTimeout(() => console.log("222>>", p), 2000);

// function HjPromise(cb) {
//     this.state = "<pending>";

//     const resolve = (res) => {
//         console.log("성공>>>", res);
//         this.state = "<resolve>";
//     };
//     const reject = (error) => {
//         console.log("실패>>>", error);
//         this.state = "<reject>";

//         return this.state;
//     };

//     cb(resolve, reject);
// }

// console.log(typeof p);

const p = new HjPromise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log("fulfill", now));
        else reject(new Error("어디로?"));
    }, 1000);
});

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);

//생성자 함수
function HjPromise(cb) {
    //this에 새로운 프로퍼티 추가
    this.state = "<pending>";

    // callback을 위한 메서드 생성
    const resolve = (res) => {
        console.log("성공===>", res);
        this.state = "<resolve>";
    };

    const reject = (error) => {
        console.log("실패===>", error);
        this.state = "<reject>";
    };

    cb(resolve, reject);
}
