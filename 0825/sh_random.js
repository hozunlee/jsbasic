const rand = (s, e) => {
    return s + Math.floor((e - s + 1) * Math.random());
};

console.log(rand(1, 10));

//date 는 날짜 day는 week 데이 요일

return;
const obj = {};
for (var i = 0; i < 1_000_000; i += 1) {
    const r = rand(1, 10);
    obj[r] = (obj[r] ?? 0) + 1;
}

const entries = Object.entries(obj);
entries.sort((a, b) => b[1] - a[1]);

console.log("entries :>> ", entries);
