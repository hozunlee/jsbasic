const obj = {};

console.time("hi");
for (i = 0; i < 1_000_000_000; i += 1) {
    const a = Math.floor(Math.random() * 10 + 1);
    if (!obj[a]) {
        obj[a] = 1;
    } else {
        obj[a] += 1;
    }
}
console.timeEnd("hi");
console.log(obj);

const b = Object.values(obj);
const c = b.reduce((pre, cur) => pre + cur);
console.log("🚀 ~ file: random.js ~ line 17 ~ c", c);
