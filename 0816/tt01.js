function* gener() {
    const x = yield "첫번째 수";
    const y = yield "두번째 수";
    console.log("x y =", x, y);
    return x + y;
}
const it3 = gener();
console.log(it3.next()); // { value: 1, done: false }
console.log(it3.next(1)); // { value: 13, done: false }
// x y = 3 5
console.log(it3.next(2)); // { value: 8, done: true }
