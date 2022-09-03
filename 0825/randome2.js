//특정 범위의 난수를 발생시키는 함수를 작성하시오.
const a = Math.floor(Math.random() * 9 + 1);

const rand = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start);
};

console.log("rand(1, 10) :>> ", rand(1, 10)); // 1 ~ 10 사이의 난수
console.log("rand(1, 10) :>> ", rand(0, 9)); // 0 ~ 9 사이의 난수
console.log("rand(1, 10) :>> ", rand(100, 200)); // 100 ~ 200 사이의 난수

const obj = {};

for (i = 0; i < 100; i += 1) {
    const a = rand(50, 100);
    if (!obj[a]) {
        obj[a] = 1;
    } else {
        obj[a] += 1;
    }
}

console.log("obj :>> ", obj);
return;

rand(0, 9); //
rand(100, 200); //
