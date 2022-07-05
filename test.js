for (let i = 0.1; i < 1; i = (i * 10 + 0.1 * 10) / 10) {
    console.log(i);
}

function toValidFloat(a, b, length) {
    const po = Math.pow(10, length);
    return (a * po + b * po) / po;
}

console.log(toValidFloat(0.21354, 0.1, 5));

const ab = [1, 2, 3, 4, 5];
let [a1, b2, ...c1] = ab;
console.log(c1);

console.log(0.14 + 0.28, 0.14 * 100);

// arr 이 엄청 큰 배열이며, 가변적이라고 한다면 먼저 선언해주기
// const al = arr.length
// for (let i = 0; i < arr.length; i++) { … }
// for (let i = 0; i < al; i++) { … } // 미리 선언해주고 쓰기
// for (let i = 0; i < fn(); i++) { … }

for (let i = 2; i < 11; i += 1) {
    console.log(i, Math.sqrt(i).toFixed(3));
}
