function* 제너레이터() {
    const a = yield "첫번째 수는?";
    const b = yield "두번째 수는?";
    console.log("a, b :>> ", a, b);
    return a + b;
}
const it = 제너레이터();
console.log(it.next());
console.log(it.next(1));
console.log(it.next(2));
